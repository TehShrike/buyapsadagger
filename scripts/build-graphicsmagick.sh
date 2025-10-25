#!/usr/bin/env bash

set -e

# Configuration
GM_VERSION="1.3.45"
GM_TARBALL="GraphicsMagick-${GM_VERSION}.tar.xz"
GM_DOWNLOAD_URL="https://sourceforge.net/projects/graphicsmagick/files/graphicsmagick/${GM_VERSION}/${GM_TARBALL}/download"

JPEG_VERSION="9f"
JPEG_TARBALL="jpegsrc.v${JPEG_VERSION}.tar.gz"
JPEG_DOWNLOAD_URL="https://www.ijg.org/files/${JPEG_TARBALL}"

PNG_VERSION="1.6.50"
PNG_TARBALL="libpng-${PNG_VERSION}.tar.xz"
PNG_DOWNLOAD_URL="https://download.sourceforge.net/libpng/${PNG_TARBALL}"

VENDOR_DIR="vendor"
JPEG_BUILD_DIR="${VENDOR_DIR}/jpeg-${JPEG_VERSION}"
JPEG_INSTALL_PREFIX="${VENDOR_DIR}/libjpeg"
PNG_BUILD_DIR="${VENDOR_DIR}/libpng-${PNG_VERSION}"
PNG_INSTALL_PREFIX="${VENDOR_DIR}/libpng"
GM_BUILD_DIR="${VENDOR_DIR}/GraphicsMagick-${GM_VERSION}"
GM_INSTALL_PREFIX="${VENDOR_DIR}/graphicsmagick"

# Create vendor directory
mkdir -p "${VENDOR_DIR}"

# Build libjpeg first
echo "Building libjpeg ${JPEG_VERSION}..."

# Download libjpeg if not already present
if [ ! -f "${VENDOR_DIR}/${JPEG_TARBALL}" ]; then
    echo "Downloading libjpeg ${JPEG_VERSION}..."
    curl -L "${JPEG_DOWNLOAD_URL}" -o "${VENDOR_DIR}/${JPEG_TARBALL}"
else
    echo "libjpeg tarball already downloaded, skipping download..."
fi

# Extract libjpeg
if [ ! -d "${JPEG_BUILD_DIR}" ]; then
    echo "Extracting libjpeg tarball..."
    tar -xf "${VENDOR_DIR}/${JPEG_TARBALL}" -C "${VENDOR_DIR}"
else
    echo "libjpeg source already extracted, skipping extraction..."
fi

# Build and install libjpeg
cd "${JPEG_BUILD_DIR}"

if [ ! -f "Makefile" ]; then
    echo "Configuring libjpeg..."
    ./configure \
        --prefix="$(pwd)/../../${JPEG_INSTALL_PREFIX}" \
        --enable-shared=no \
        --enable-static=yes
else
    echo "libjpeg already configured, skipping configure..."
fi

echo "Building libjpeg..."
make -j$(sysctl -n hw.ncpu 2>/dev/null || nproc 2>/dev/null || echo 4)

echo "Installing libjpeg to ${JPEG_INSTALL_PREFIX}..."
make install

cd ../../

echo ""
echo "Building libpng ${PNG_VERSION}..."

# Download libpng if not already present
if [ ! -f "${VENDOR_DIR}/${PNG_TARBALL}" ]; then
    echo "Downloading libpng ${PNG_VERSION}..."
    curl -L "${PNG_DOWNLOAD_URL}" -o "${VENDOR_DIR}/${PNG_TARBALL}"
else
    echo "libpng tarball already downloaded, skipping download..."
fi

# Extract libpng
if [ ! -d "${PNG_BUILD_DIR}" ]; then
    echo "Extracting libpng tarball..."
    tar -xf "${VENDOR_DIR}/${PNG_TARBALL}" -C "${VENDOR_DIR}"
else
    echo "libpng source already extracted, skipping extraction..."
fi

# Build and install libpng
cd "${PNG_BUILD_DIR}"

if [ ! -f "Makefile" ]; then
    echo "Configuring libpng..."
    ./configure \
        --prefix="$(pwd)/../../${PNG_INSTALL_PREFIX}" \
        --enable-shared=no \
        --enable-static=yes
else
    echo "libpng already configured, skipping configure..."
fi

echo "Building libpng..."
make -j$(sysctl -n hw.ncpu 2>/dev/null || nproc 2>/dev/null || echo 4)

echo "Installing libpng to ${PNG_INSTALL_PREFIX}..."
make install

cd ../../

echo ""
echo "Building GraphicsMagick ${GM_VERSION}..."

# Download GraphicsMagick if not already present
if [ ! -f "${VENDOR_DIR}/${GM_TARBALL}" ]; then
    echo "Downloading GraphicsMagick ${GM_VERSION}..."
    curl -L "${GM_DOWNLOAD_URL}" -o "${VENDOR_DIR}/${GM_TARBALL}"
else
    echo "GraphicsMagick tarball already downloaded, skipping download..."
fi

# Extract GraphicsMagick
if [ ! -d "${GM_BUILD_DIR}" ]; then
    echo "Extracting GraphicsMagick tarball..."
    tar -xf "${VENDOR_DIR}/${GM_TARBALL}" -C "${VENDOR_DIR}"
else
    echo "GraphicsMagick source already extracted, skipping extraction..."
fi

# Build and install GraphicsMagick
cd "${GM_BUILD_DIR}"

if [ ! -f "Makefile" ]; then
    echo "Configuring GraphicsMagick..."
    ./configure \
        --prefix="$(pwd)/../../${GM_INSTALL_PREFIX}" \
        --enable-shared=no \
        --enable-static=yes \
        --with-quantum-depth=16 \
        --without-perl \
        --without-x \
        --with-jpeg=yes \
        --with-png=yes \
        CPPFLAGS="-I$(pwd)/../../${JPEG_INSTALL_PREFIX}/include -I$(pwd)/../../${PNG_INSTALL_PREFIX}/include" \
        LDFLAGS="-L$(pwd)/../../${JPEG_INSTALL_PREFIX}/lib -L$(pwd)/../../${PNG_INSTALL_PREFIX}/lib"
else
    echo "GraphicsMagick already configured, skipping configure..."
fi

echo "Building GraphicsMagick (this may take a few minutes)..."
make -j$(sysctl -n hw.ncpu 2>/dev/null || nproc 2>/dev/null || echo 4)

echo "Installing to ${GM_INSTALL_PREFIX}..."
make install

cd ../../

echo ""
echo "GraphicsMagick ${GM_VERSION} built successfully with JPEG and PNG support!"
echo "Installation location: $(pwd)/${GM_INSTALL_PREFIX}"
echo "Binary: $(pwd)/${GM_INSTALL_PREFIX}/bin/gm"
echo ""
echo "To use: export PATH=\"$(pwd)/${GM_INSTALL_PREFIX}/bin:\$PATH\""
