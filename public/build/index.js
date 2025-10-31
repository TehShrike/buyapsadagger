var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// node_modules/.pnpm/esm-env@1.2.2/node_modules/esm-env/dev-fallback.js
var node_env = globalThis.process?.env?.NODE_ENV;
var dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/shared/utils.js
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var array_from = Array.from;
var object_keys = Object.keys;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var get_descriptors = Object.getOwnPropertyDescriptors;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var is_extensible = Object.isExtensible;
var noop = () => {
};
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function deferred() {
  var resolve;
  var reject;
  var promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/constants.js
var DERIVED = 1 << 1;
var EFFECT = 1 << 2;
var RENDER_EFFECT = 1 << 3;
var BLOCK_EFFECT = 1 << 4;
var BRANCH_EFFECT = 1 << 5;
var ROOT_EFFECT = 1 << 6;
var BOUNDARY_EFFECT = 1 << 7;
var UNOWNED = 1 << 8;
var DISCONNECTED = 1 << 9;
var CLEAN = 1 << 10;
var DIRTY = 1 << 11;
var MAYBE_DIRTY = 1 << 12;
var INERT = 1 << 13;
var DESTROYED = 1 << 14;
var EFFECT_RAN = 1 << 15;
var EFFECT_TRANSPARENT = 1 << 16;
var INSPECT_EFFECT = 1 << 17;
var HEAD_EFFECT = 1 << 18;
var EFFECT_PRESERVED = 1 << 19;
var USER_EFFECT = 1 << 20;
var REACTION_IS_UPDATING = 1 << 21;
var ASYNC = 1 << 22;
var ERROR_VALUE = 1 << 23;
var STATE_SYMBOL = Symbol("$state");
var LEGACY_PROPS = Symbol("legacy props");
var LOADING_ATTR_SYMBOL = Symbol("");
var PROXY_PATH_SYMBOL = Symbol("proxy path");
var STALE_REACTION = new class StaleReactionError extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "StaleReactionError");
    __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/shared/errors.js
function await_outside_boundary() {
  if (dev_fallback_default) {
    const error = new Error(`await_outside_boundary
Cannot await outside a \`<svelte:boundary>\` with a \`pending\` snippet
https://svelte.dev/e/await_outside_boundary`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/await_outside_boundary`);
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/errors.js
function async_derived_orphan() {
  if (dev_fallback_default) {
    const error = new Error(`async_derived_orphan
Cannot create a \`$derived(...)\` with an \`await\` expression outside of an effect tree
https://svelte.dev/e/async_derived_orphan`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/async_derived_orphan`);
  }
}
function derived_references_self() {
  if (dev_fallback_default) {
    const error = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/derived_references_self`);
  }
}
function effect_in_teardown(rune) {
  if (dev_fallback_default) {
    const error = new Error(`effect_in_teardown
\`${rune}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_teardown`);
  }
}
function effect_in_unowned_derived() {
  if (dev_fallback_default) {
    const error = new Error(`effect_in_unowned_derived
Effect cannot be created inside a \`$derived\` value that was not itself created inside an effect
https://svelte.dev/e/effect_in_unowned_derived`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
  }
}
function effect_orphan(rune) {
  if (dev_fallback_default) {
    const error = new Error(`effect_orphan
\`${rune}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_orphan`);
  }
}
function effect_update_depth_exceeded() {
  if (dev_fallback_default) {
    const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function flush_sync_in_effect() {
  if (dev_fallback_default) {
    const error = new Error(`flush_sync_in_effect
Cannot use \`flushSync\` inside an effect
https://svelte.dev/e/flush_sync_in_effect`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/flush_sync_in_effect`);
  }
}
function hydration_failed() {
  if (dev_fallback_default) {
    const error = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function invalid_snippet() {
  if (dev_fallback_default) {
    const error = new Error(`invalid_snippet
Could not \`{@render}\` snippet due to the expression being \`null\` or \`undefined\`. Consider using optional chaining \`{@render snippet?.()}\`
https://svelte.dev/e/invalid_snippet`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/invalid_snippet`);
  }
}
function props_invalid_value(key2) {
  if (dev_fallback_default) {
    const error = new Error(`props_invalid_value
Cannot do \`bind:${key2}={undefined}\` when \`${key2}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/props_invalid_value`);
  }
}
function rune_outside_svelte(rune) {
  if (dev_fallback_default) {
    const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
  }
}
function state_descriptors_fixed() {
  if (dev_fallback_default) {
    const error = new Error(`state_descriptors_fixed
Property descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.
https://svelte.dev/e/state_descriptors_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  if (dev_fallback_default) {
    const error = new Error(`state_prototype_fixed
Cannot set prototype of \`$state\` object
https://svelte.dev/e/state_prototype_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  if (dev_fallback_default) {
    const error = new Error(`state_unsafe_mutation
Updating state inside \`$derived(...)\`, \`$inspect(...)\` or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/constants.js
var EACH_ITEM_REACTIVE = 1;
var EACH_INDEX_REACTIVE = 1 << 1;
var EACH_IS_CONTROLLED = 1 << 2;
var EACH_IS_ANIMATED = 1 << 3;
var EACH_ITEM_IMMUTABLE = 1 << 4;
var PROPS_IS_IMMUTABLE = 1;
var PROPS_IS_RUNES = 1 << 1;
var PROPS_IS_UPDATED = 1 << 2;
var PROPS_IS_BINDABLE = 1 << 3;
var PROPS_IS_LAZY_INITIAL = 1 << 4;
var TRANSITION_OUT = 1 << 1;
var TRANSITION_GLOBAL = 1 << 2;
var TEMPLATE_FRAGMENT = 1;
var TEMPLATE_USE_IMPORT_NODE = 1 << 1;
var TEMPLATE_USE_SVG = 1 << 2;
var TEMPLATE_USE_MATHML = 1 << 3;
var HYDRATION_START = "[";
var HYDRATION_START_ELSE = "[!";
var HYDRATION_END = "]";
var HYDRATION_ERROR = {};
var ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
var ELEMENT_IS_INPUT = 1 << 2;
var UNINITIALIZED = Symbol();
var FILENAME = Symbol("filename");
var HMR = Symbol("hmr");
var NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/warnings.js
var bold = "font-weight: bold";
var normal = "font-weight: normal";
function await_reactivity_loss(name) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${name}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/await_reactivity_loss`);
  }
}
function await_waterfall(name, location) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] await_waterfall
%cAn async derived, \`${name}\` (${location}) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app
https://svelte.dev/e/await_waterfall`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/await_waterfall`);
  }
}
function hydration_attribute_changed(attribute, html2, value) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${attribute}\` attribute on \`${html2}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
  }
}
function hydration_mismatch(location) {
  if (dev_fallback_default) {
    console.warn(
      `%c[svelte] hydration_mismatch
%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`,
      bold,
      normal
    );
  } else {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
function lifecycle_double_unmount() {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
  }
}
function state_proxy_equality_mismatch(operator) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/hydration.js
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}
function reset(node) {
  if (!hydrating) return;
  if (get_next_sibling(hydrate_node) !== null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  hydrate_node = node;
}
function next(count = 1) {
  if (hydrating) {
    var i = count;
    var node = hydrate_node;
    while (i--) {
      node = /** @type {TemplateNode} */
      get_next_sibling(node);
    }
    hydrate_node = node;
  }
}
function remove_nodes() {
  var depth = 0;
  var node = hydrate_node;
  while (true) {
    if (node.nodeType === COMMENT_NODE) {
      var data2 = (
        /** @type {Comment} */
        node.data
      );
      if (data2 === HYDRATION_END) {
        if (depth === 0) return node;
        depth -= 1;
      } else if (data2 === HYDRATION_START || data2 === HYDRATION_START_ELSE) {
        depth += 1;
      }
    }
    var next2 = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    node.remove();
    node = next2;
  }
}
function read_hydration_instruction(node) {
  if (!node || node.nodeType !== COMMENT_NODE) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return (
    /** @type {Comment} */
    node.data
  );
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/reactivity/equality.js
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/flags/index.js
var async_mode_flag = false;
var legacy_mode_flag = false;
var tracing_mode_flag = false;

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dev/tracing.js
var tracing_expressions = null;
function get_stack(label) {
  let error = Error();
  const stack2 = error.stack;
  if (!stack2) return null;
  const lines = stack2.split("\n");
  const new_lines = ["\n"];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line === "Error") {
      continue;
    }
    if (line.includes("validate_each_keys")) {
      return null;
    }
    if (line.includes("svelte/src/internal")) {
      continue;
    }
    new_lines.push(line);
  }
  if (new_lines.length === 1) {
    return null;
  }
  define_property(error, "stack", {
    value: new_lines.join("\n")
  });
  define_property(error, "name", {
    // 'Error' suffix is required for stack traces to be rendered properly
    value: `${label}Error`
  });
  return (
    /** @type {Error & { stack: string }} */
    error
  );
}
function tag(source2, label) {
  source2.label = label;
  tag_proxy(source2.v, label);
  return source2;
}
function tag_proxy(value, label) {
  value?.[PROXY_PATH_SYMBOL]?.(label);
  return value;
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/context.js
var component_context = null;
function set_component_context(context) {
  component_context = context;
}
var dev_stack = null;
function set_dev_stack(stack2) {
  dev_stack = stack2;
}
var dev_current_component_function = null;
function set_dev_current_component_function(fn) {
  dev_current_component_function = fn;
}
function push(props, runes = false, fn) {
  component_context = {
    p: component_context,
    c: null,
    e: null,
    s: props,
    x: null,
    l: legacy_mode_flag && !runes ? { s: null, u: null, $: [] } : null
  };
  if (dev_fallback_default) {
    component_context.function = fn;
    dev_current_component_function = fn;
  }
}
function pop(component2) {
  var context = (
    /** @type {ComponentContext} */
    component_context
  );
  var effects = context.e;
  if (effects !== null) {
    context.e = null;
    for (var fn of effects) {
      create_user_effect(fn);
    }
  }
  if (component2 !== void 0) {
    context.x = component2;
  }
  component_context = context.p;
  if (dev_fallback_default) {
    dev_current_component_function = component_context?.function ?? null;
  }
  return component2 ?? /** @type {T} */
  {};
}
function is_runes() {
  return !legacy_mode_flag || component_context !== null && component_context.l === null;
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/error-handling.js
var adjustments = /* @__PURE__ */ new WeakMap();
function handle_error(error) {
  var effect2 = active_effect;
  if (effect2 === null) {
    active_reaction.f |= ERROR_VALUE;
    return error;
  }
  if (dev_fallback_default && error instanceof Error && !adjustments.has(error)) {
    adjustments.set(error, get_adjustments(error, effect2));
  }
  if ((effect2.f & EFFECT_RAN) === 0) {
    if ((effect2.f & BOUNDARY_EFFECT) === 0) {
      if (!effect2.parent && error instanceof Error) {
        apply_adjustments(error);
      }
      throw error;
    }
    effect2.b.error(error);
  } else {
    invoke_error_boundary(error, effect2);
  }
}
function invoke_error_boundary(error, effect2) {
  while (effect2 !== null) {
    if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
      try {
        effect2.b.error(error);
        return;
      } catch (e) {
        error = e;
      }
    }
    effect2 = effect2.parent;
  }
  if (error instanceof Error) {
    apply_adjustments(error);
  }
  throw error;
}
function get_adjustments(error, effect2) {
  const message_descriptor = get_descriptor(error, "message");
  if (message_descriptor && !message_descriptor.configurable) return;
  var indent = is_firefox ? "  " : "	";
  var component_stack = `
${indent}in ${effect2.fn?.name || "<unknown>"}`;
  var context = effect2.ctx;
  while (context !== null) {
    component_stack += `
${indent}in ${context.function?.[FILENAME].split("/").pop()}`;
    context = context.p;
  }
  return {
    message: error.message + `
${component_stack}
`,
    stack: error.stack?.split("\n").filter((line) => !line.includes("svelte/src/internal")).join("\n")
  };
}
function apply_adjustments(error) {
  const adjusted = adjustments.get(error);
  if (adjusted) {
    define_property(error, "message", {
      value: adjusted.message
    });
    define_property(error, "stack", {
      value: adjusted.stack
    });
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/task.js
var micro_tasks = [];
var idle_tasks = [];
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function run_idle_tasks() {
  var tasks = idle_tasks;
  idle_tasks = [];
  run_all(tasks);
}
function has_pending_tasks() {
  return micro_tasks.length > 0 || idle_tasks.length > 0;
}
function queue_micro_task(fn) {
  if (micro_tasks.length === 0 && !is_flushing_sync) {
    var tasks = micro_tasks;
    queueMicrotask(() => {
      if (tasks === micro_tasks) run_micro_tasks();
    });
  }
  micro_tasks.push(fn);
}
function flush_tasks() {
  if (micro_tasks.length > 0) {
    run_micro_tasks();
  }
  if (idle_tasks.length > 0) {
    run_idle_tasks();
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED | BOUNDARY_EFFECT;
function get_boundary() {
  const boundary2 = (
    /** @type {Effect} */
    active_effect.b
  );
  if (boundary2 === null) {
    await_outside_boundary();
  }
  return boundary2;
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/reactivity/deriveds.js
var current_async_effect = null;
function set_from_async_derived(v) {
  current_async_effect = v;
}
var recent_async_deriveds = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function derived(fn) {
  var flags2 = DERIVED | DIRTY;
  var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
    /** @type {Derived} */
    active_reaction
  ) : null;
  if (active_effect === null || parent_derived !== null && (parent_derived.f & UNOWNED) !== 0) {
    flags2 |= UNOWNED;
  } else {
    active_effect.f |= EFFECT_PRESERVED;
  }
  const signal = {
    ctx: component_context,
    deps: null,
    effects: null,
    equals,
    f: flags2,
    fn,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      UNINITIALIZED
    ),
    wv: 0,
    parent: parent_derived ?? active_effect,
    ac: null
  };
  if (dev_fallback_default && tracing_mode_flag) {
    signal.created = get_stack("CreatedAt");
  }
  return signal;
}
// @__NO_SIDE_EFFECTS__
function async_derived(fn, location) {
  let parent = (
    /** @type {Effect | null} */
    active_effect
  );
  if (parent === null) {
    async_derived_orphan();
  }
  var boundary2 = (
    /** @type {Boundary} */
    parent.b
  );
  var promise = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  );
  var signal = source(
    /** @type {V} */
    UNINITIALIZED
  );
  var prev = null;
  var should_suspend = !active_reaction;
  async_effect(() => {
    if (dev_fallback_default) current_async_effect = active_effect;
    try {
      var p = fn();
      if (prev) Promise.resolve(p).catch(() => {
      });
    } catch (error) {
      p = Promise.reject(error);
    }
    if (dev_fallback_default) current_async_effect = null;
    var r = () => p;
    promise = prev?.then(r, r) ?? Promise.resolve(p);
    prev = promise;
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var pending2 = boundary2.is_pending();
    if (should_suspend) {
      boundary2.update_pending_count(1);
      if (!pending2) batch.increment();
    }
    const handler = (value, error = void 0) => {
      prev = null;
      current_async_effect = null;
      if (!pending2) batch.activate();
      if (error) {
        if (error !== STALE_REACTION) {
          signal.f |= ERROR_VALUE;
          internal_set(signal, error);
        }
      } else {
        if ((signal.f & ERROR_VALUE) !== 0) {
          signal.f ^= ERROR_VALUE;
        }
        internal_set(signal, value);
        if (dev_fallback_default && location !== void 0) {
          recent_async_deriveds.add(signal);
          setTimeout(() => {
            if (recent_async_deriveds.has(signal)) {
              await_waterfall(
                /** @type {string} */
                signal.label,
                location
              );
              recent_async_deriveds.delete(signal);
            }
          });
        }
      }
      if (should_suspend) {
        boundary2.update_pending_count(-1);
        if (!pending2) batch.decrement();
      }
      unset_context();
    };
    promise.then(handler, (e) => handler(null, e || "unknown"));
    if (batch) {
      return () => {
        queueMicrotask(() => batch.neuter());
      };
    }
  });
  if (dev_fallback_default) {
    signal.f |= ASYNC;
  }
  return new Promise((fulfil) => {
    function next2(p) {
      function go() {
        if (p === promise) {
          fulfil(signal);
        } else {
          next2(promise);
        }
      }
      p.then(go, go);
    }
    next2(promise);
  });
}
// @__NO_SIDE_EFFECTS__
function user_derived(fn) {
  const d = /* @__PURE__ */ derived(fn);
  push_reaction_value(d);
  return d;
}
// @__NO_SIDE_EFFECTS__
function derived_safe_equal(fn) {
  const signal = /* @__PURE__ */ derived(fn);
  signal.equals = safe_equals;
  return signal;
}
function destroy_derived_effects(derived2) {
  var effects = derived2.effects;
  if (effects !== null) {
    derived2.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
var stack = [];
function get_derived_parent_effect(derived2) {
  var parent = derived2.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived2) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived2));
  if (dev_fallback_default) {
    let prev_inspect_effects = inspect_effects;
    set_inspect_effects(/* @__PURE__ */ new Set());
    try {
      if (stack.includes(derived2)) {
        derived_references_self();
      }
      stack.push(derived2);
      destroy_derived_effects(derived2);
      value = update_reaction(derived2);
    } finally {
      set_active_effect(prev_active_effect);
      set_inspect_effects(prev_inspect_effects);
      stack.pop();
    }
  } else {
    try {
      destroy_derived_effects(derived2);
      value = update_reaction(derived2);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived2) {
  var value = execute_derived(derived2);
  if (!derived2.equals(value)) {
    derived2.v = value;
    derived2.wv = increment_write_version();
  }
  if (is_destroying_effect) {
    return;
  }
  if (batch_deriveds !== null) {
    batch_deriveds.set(derived2, derived2.v);
  } else {
    var status = (skip_reaction || (derived2.f & UNOWNED) !== 0) && derived2.deps !== null ? MAYBE_DIRTY : CLEAN;
    set_signal_status(derived2, status);
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/reactivity/async.js
function flatten(sync, async2, fn) {
  const d = is_runes() ? derived : derived_safe_equal;
  if (async2.length === 0) {
    fn(sync.map(d));
    return;
  }
  var batch = current_batch;
  var parent = (
    /** @type {Effect} */
    active_effect
  );
  var restore = capture();
  var boundary2 = get_boundary();
  Promise.all(async2.map((expression) => async_derived(expression))).then((result) => {
    batch?.activate();
    restore();
    try {
      fn([...sync.map(d), ...result]);
    } catch (error) {
      if ((parent.f & DESTROYED) === 0) {
        invoke_error_boundary(error, parent);
      }
    }
    batch?.deactivate();
    unset_context();
  }).catch((error) => {
    boundary2.error(error);
  });
}
function capture() {
  var previous_effect = active_effect;
  var previous_reaction = active_reaction;
  var previous_component_context = component_context;
  var previous_batch2 = current_batch;
  return function restore() {
    set_active_effect(previous_effect);
    set_active_reaction(previous_reaction);
    set_component_context(previous_component_context);
    previous_batch2?.activate();
    if (dev_fallback_default) {
      set_from_async_derived(null);
    }
  };
}
function unset_context() {
  set_active_effect(null);
  set_active_reaction(null);
  set_component_context(null);
  if (dev_fallback_default) set_from_async_derived(null);
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/reactivity/batch.js
var batches = /* @__PURE__ */ new Set();
var current_batch = null;
var previous_batch = null;
var batch_deriveds = null;
var effect_pending_updates = /* @__PURE__ */ new Set();
var queued_root_effects = [];
var last_scheduled_effect = null;
var is_flushing = false;
var is_flushing_sync = false;
var _previous, _callbacks, _pending, _deferred, _neutered, _async_effects, _boundary_async_effects, _render_effects, _effects, _block_effects, _dirty_effects, _maybe_dirty_effects, _Batch_instances, traverse_effect_tree_fn, defer_effects_fn, commit_fn;
var _Batch = class _Batch {
  constructor() {
    __privateAdd(this, _Batch_instances);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    __publicField(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    __privateAdd(this, _previous, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    __privateAdd(this, _callbacks, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    __privateAdd(this, _pending, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    __privateAdd(this, _deferred, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    __privateAdd(this, _neutered, false);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    __privateAdd(this, _async_effects, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    __privateAdd(this, _boundary_async_effects, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    __privateAdd(this, _render_effects, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    __privateAdd(this, _effects, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    __privateAdd(this, _block_effects, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    __privateAdd(this, _dirty_effects, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    __privateAdd(this, _maybe_dirty_effects, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(root_effects) {
    queued_root_effects = [];
    previous_batch = null;
    var current_values = null;
    if (async_mode_flag && batches.size > 1) {
      current_values = /* @__PURE__ */ new Map();
      batch_deriveds = /* @__PURE__ */ new Map();
      for (const [source2, current] of this.current) {
        current_values.set(source2, { v: source2.v, wv: source2.wv });
        source2.v = current;
      }
      for (const batch of batches) {
        if (batch === this) continue;
        for (const [source2, previous] of __privateGet(batch, _previous)) {
          if (!current_values.has(source2)) {
            current_values.set(source2, { v: source2.v, wv: source2.wv });
            source2.v = previous;
          }
        }
      }
    }
    for (const root6 of root_effects) {
      __privateMethod(this, _Batch_instances, traverse_effect_tree_fn).call(this, root6);
    }
    if (__privateGet(this, _async_effects).length === 0 && __privateGet(this, _pending) === 0) {
      __privateMethod(this, _Batch_instances, commit_fn).call(this);
      var render_effects = __privateGet(this, _render_effects);
      var effects = __privateGet(this, _effects);
      __privateSet(this, _render_effects, []);
      __privateSet(this, _effects, []);
      __privateSet(this, _block_effects, []);
      previous_batch = current_batch;
      current_batch = null;
      flush_queued_effects(render_effects);
      flush_queued_effects(effects);
      if (current_batch === null) {
        current_batch = this;
      } else {
        batches.delete(this);
      }
      __privateGet(this, _deferred)?.resolve();
    } else {
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, __privateGet(this, _render_effects));
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, __privateGet(this, _effects));
      __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, __privateGet(this, _block_effects));
    }
    if (current_values) {
      for (const [source2, { v, wv }] of current_values) {
        if (source2.wv <= wv) {
          source2.v = v;
        }
      }
      batch_deriveds = null;
    }
    for (const effect2 of __privateGet(this, _async_effects)) {
      update_effect(effect2);
    }
    for (const effect2 of __privateGet(this, _boundary_async_effects)) {
      update_effect(effect2);
    }
    __privateSet(this, _async_effects, []);
    __privateSet(this, _boundary_async_effects, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(source2, value) {
    if (!__privateGet(this, _previous).has(source2)) {
      __privateGet(this, _previous).set(source2, value);
    }
    this.current.set(source2, source2.v);
  }
  activate() {
    current_batch = this;
  }
  deactivate() {
    current_batch = null;
    previous_batch = null;
    for (const update2 of effect_pending_updates) {
      effect_pending_updates.delete(update2);
      update2();
      if (current_batch !== null) {
        break;
      }
    }
  }
  neuter() {
    __privateSet(this, _neutered, true);
  }
  flush() {
    if (queued_root_effects.length > 0) {
      flush_effects();
    } else {
      __privateMethod(this, _Batch_instances, commit_fn).call(this);
    }
    if (current_batch !== this) {
      return;
    }
    if (__privateGet(this, _pending) === 0) {
      batches.delete(this);
    }
    this.deactivate();
  }
  increment() {
    __privateSet(this, _pending, __privateGet(this, _pending) + 1);
  }
  decrement() {
    __privateSet(this, _pending, __privateGet(this, _pending) - 1);
    if (__privateGet(this, _pending) === 0) {
      for (const e of __privateGet(this, _dirty_effects)) {
        set_signal_status(e, DIRTY);
        schedule_effect(e);
      }
      for (const e of __privateGet(this, _maybe_dirty_effects)) {
        set_signal_status(e, MAYBE_DIRTY);
        schedule_effect(e);
      }
      __privateSet(this, _render_effects, []);
      __privateSet(this, _effects, []);
      this.flush();
    } else {
      this.deactivate();
    }
  }
  /** @param {() => void} fn */
  add_callback(fn) {
    __privateGet(this, _callbacks).add(fn);
  }
  settled() {
    return (__privateGet(this, _deferred) ?? __privateSet(this, _deferred, deferred())).promise;
  }
  static ensure() {
    if (current_batch === null) {
      const batch = current_batch = new _Batch();
      batches.add(current_batch);
      if (!is_flushing_sync) {
        _Batch.enqueue(() => {
          if (current_batch !== batch) {
            return;
          }
          batch.flush();
        });
      }
    }
    return current_batch;
  }
  /** @param {() => void} task */
  static enqueue(task) {
    queue_micro_task(task);
  }
};
_previous = new WeakMap();
_callbacks = new WeakMap();
_pending = new WeakMap();
_deferred = new WeakMap();
_neutered = new WeakMap();
_async_effects = new WeakMap();
_boundary_async_effects = new WeakMap();
_render_effects = new WeakMap();
_effects = new WeakMap();
_block_effects = new WeakMap();
_dirty_effects = new WeakMap();
_maybe_dirty_effects = new WeakMap();
_Batch_instances = new WeakSet();
/**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
traverse_effect_tree_fn = function(root6) {
  root6.f ^= CLEAN;
  var effect2 = root6.first;
  while (effect2 !== null) {
    var flags2 = effect2.f;
    var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
    var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
    var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.skipped_effects.has(effect2);
    if (!skip && effect2.fn !== null) {
      if (is_branch) {
        effect2.f ^= CLEAN;
      } else if ((flags2 & EFFECT) !== 0) {
        __privateGet(this, _effects).push(effect2);
      } else if (async_mode_flag && (flags2 & RENDER_EFFECT) !== 0) {
        __privateGet(this, _render_effects).push(effect2);
      } else if ((flags2 & CLEAN) === 0) {
        if ((flags2 & ASYNC) !== 0) {
          var effects = effect2.b?.is_pending() ? __privateGet(this, _boundary_async_effects) : __privateGet(this, _async_effects);
          effects.push(effect2);
        } else if (is_dirty(effect2)) {
          if ((effect2.f & BLOCK_EFFECT) !== 0) __privateGet(this, _block_effects).push(effect2);
          update_effect(effect2);
        }
      }
      var child2 = effect2.first;
      if (child2 !== null) {
        effect2 = child2;
        continue;
      }
    }
    var parent = effect2.parent;
    effect2 = effect2.next;
    while (effect2 === null && parent !== null) {
      effect2 = parent.next;
      parent = parent.parent;
    }
  }
};
/**
 * @param {Effect[]} effects
 */
defer_effects_fn = function(effects) {
  for (const e of effects) {
    const target = (e.f & DIRTY) !== 0 ? __privateGet(this, _dirty_effects) : __privateGet(this, _maybe_dirty_effects);
    target.push(e);
    set_signal_status(e, CLEAN);
  }
  effects.length = 0;
};
/**
 * Append and remove branches to/from the DOM
 */
commit_fn = function() {
  if (!__privateGet(this, _neutered)) {
    for (const fn of __privateGet(this, _callbacks)) {
      fn();
    }
  }
  __privateGet(this, _callbacks).clear();
};
var Batch = _Batch;
function flushSync(fn) {
  if (async_mode_flag && active_effect !== null) {
    flush_sync_in_effect();
  }
  var was_flushing_sync = is_flushing_sync;
  is_flushing_sync = true;
  try {
    var result;
    if (fn) {
      flush_effects();
      result = fn();
    }
    while (true) {
      flush_tasks();
      if (queued_root_effects.length === 0 && !has_pending_tasks()) {
        current_batch?.flush();
        if (queued_root_effects.length === 0) {
          last_scheduled_effect = null;
          return (
            /** @type {T} */
            result
          );
        }
      }
      flush_effects();
    }
  } finally {
    is_flushing_sync = was_flushing_sync;
  }
}
function flush_effects() {
  var was_updating_effect = is_updating_effect;
  is_flushing = true;
  try {
    var flush_count = 0;
    set_is_updating_effect(true);
    while (queued_root_effects.length > 0) {
      var batch = Batch.ensure();
      if (flush_count++ > 1e3) {
        if (dev_fallback_default) {
          var updates = /* @__PURE__ */ new Map();
          for (const source2 of batch.current.keys()) {
            for (const [stack2, update2] of source2.updated ?? []) {
              var entry = updates.get(stack2);
              if (!entry) {
                entry = { error: update2.error, count: 0 };
                updates.set(stack2, entry);
              }
              entry.count += update2.count;
            }
          }
          for (const update2 of updates.values()) {
            console.error(update2.error);
          }
        }
        infinite_loop_guard();
      }
      batch.process(queued_root_effects);
      old_values.clear();
    }
  } finally {
    is_flushing = false;
    set_is_updating_effect(was_updating_effect);
    last_scheduled_effect = null;
  }
}
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error) {
    if (dev_fallback_default) {
      define_property(error, "stack", { value: "" });
    }
    invoke_error_boundary(error, last_scheduled_effect);
  }
}
var eager_block_effects = null;
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  var i = 0;
  while (i < length) {
    var effect2 = effects[i++];
    if ((effect2.f & (DESTROYED | INERT)) === 0 && is_dirty(effect2)) {
      eager_block_effects = [];
      update_effect(effect2);
      if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
        if (effect2.teardown === null && effect2.ac === null) {
          unlink_effect(effect2);
        } else {
          effect2.fn = null;
        }
      }
      if (eager_block_effects?.length > 0) {
        old_values.clear();
        for (const e of eager_block_effects) {
          update_effect(e);
        }
        eager_block_effects = [];
      }
    }
  }
  eager_block_effects = null;
}
function schedule_effect(signal) {
  var effect2 = last_scheduled_effect = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags2 = effect2.f;
    if (is_flushing && effect2 === active_effect && (flags2 & BLOCK_EFFECT) !== 0) {
      return;
    }
    if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags2 & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/reactivity/sources.js
var inspect_effects = /* @__PURE__ */ new Set();
var old_values = /* @__PURE__ */ new Map();
function set_inspect_effects(v) {
  inspect_effects = v;
}
var inspect_effects_deferred = false;
function set_inspect_effects_deferred() {
  inspect_effects_deferred = true;
}
function source(v, stack2) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  if (dev_fallback_default && tracing_mode_flag) {
    signal.created = stack2 ?? get_stack("CreatedAt");
    signal.updated = null;
    signal.set_during_effect = false;
    signal.trace = null;
  }
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v, stack2) {
  const s = source(v, stack2);
  push_reaction_value(s);
  return s;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false, trackable = true) {
  var _a2;
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) {
    ((_a2 = component_context.l).s ?? (_a2.s = [])).push(s);
  }
  return s;
}
function set(source2, value, should_proxy = false) {
  if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!untracking || (active_reaction.f & INSPECT_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | INSPECT_EFFECT)) !== 0 && !current_sources?.includes(source2)) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  if (dev_fallback_default) {
    tag_proxy(
      new_value,
      /** @type {string} */
      source2.label
    );
  }
  return internal_set(source2, new_value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    var old_value = source2.v;
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else {
      old_values.set(source2, old_value);
    }
    source2.v = value;
    var batch = Batch.ensure();
    batch.capture(source2, old_value);
    if (dev_fallback_default) {
      if (tracing_mode_flag || active_effect !== null) {
        const error = get_stack("UpdatedAt");
        if (error !== null) {
          source2.updated ?? (source2.updated = /* @__PURE__ */ new Map());
          let entry = source2.updated.get(error.stack);
          if (!entry) {
            entry = { error, count: 0 };
            source2.updated.set(error.stack, entry);
          }
          entry.count++;
        }
      }
      if (active_effect !== null) {
        source2.set_during_effect = true;
      }
    }
    if ((source2.f & DERIVED) !== 0) {
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(
          /** @type {Derived} */
          source2
        );
      }
      set_signal_status(source2, (source2.f & UNOWNED) === 0 ? CLEAN : MAYBE_DIRTY);
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
    if (dev_fallback_default && inspect_effects.size > 0 && !inspect_effects_deferred) {
      flush_inspect_effects();
    }
  }
  return value;
}
function flush_inspect_effects() {
  inspect_effects_deferred = false;
  const inspects = Array.from(inspect_effects);
  for (const effect2 of inspects) {
    if ((effect2.f & CLEAN) !== 0) {
      set_signal_status(effect2, MAYBE_DIRTY);
    }
    if (is_dirty(effect2)) {
      update_effect(effect2);
    }
  }
  inspect_effects.clear();
}
function increment(source2) {
  set(source2, source2.v + 1);
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags2 = reaction.f;
    if (!runes && reaction === active_effect) continue;
    if (dev_fallback_default && (flags2 & INSPECT_EFFECT) !== 0) {
      inspect_effects.add(reaction);
      continue;
    }
    var not_dirty = (flags2 & DIRTY) === 0;
    if (not_dirty) {
      set_signal_status(reaction, status);
    }
    if ((flags2 & DERIVED) !== 0) {
      mark_reactions(
        /** @type {Derived} */
        reaction,
        MAYBE_DIRTY
      );
    } else if (not_dirty) {
      if ((flags2 & BLOCK_EFFECT) !== 0) {
        if (eager_block_effects !== null) {
          eager_block_effects.push(
            /** @type {Effect} */
            reaction
          );
        }
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/proxy.js
var regex_is_valid_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = state(0);
  var stack2 = dev_fallback_default && tracing_mode_flag ? get_stack("CreatedAt") : null;
  var parent_version = update_version;
  var with_parent = (fn) => {
    if (update_version === parent_version) {
      return fn();
    }
    var reaction = active_reaction;
    var version2 = update_version;
    set_active_reaction(null);
    set_update_version(parent_version);
    var result = fn();
    set_active_reaction(reaction);
    set_update_version(version2);
    return result;
  };
  if (is_proxied_array) {
    sources.set("length", state(
      /** @type {any[]} */
      value.length,
      stack2
    ));
    if (dev_fallback_default) {
      value = /** @type {any} */
      inspectable_array(
        /** @type {any[]} */
        value
      );
    }
  }
  var path = "";
  let updating = false;
  function update_path(new_path) {
    if (updating) return;
    updating = true;
    path = new_path;
    tag(version, `${path} version`);
    for (const [prop2, source2] of sources) {
      tag(source2, get_label(path, prop2));
    }
    updating = false;
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop2, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s = sources.get(prop2);
        if (s === void 0) {
          s = with_parent(() => {
            var s2 = state(descriptor.value, stack2);
            sources.set(prop2, s2);
            if (dev_fallback_default && typeof prop2 === "string") {
              tag(s2, get_label(path, prop2));
            }
            return s2;
          });
        } else {
          set(s, descriptor.value, true);
        }
        return true;
      },
      deleteProperty(target, prop2) {
        var s = sources.get(prop2);
        if (s === void 0) {
          if (prop2 in target) {
            const s2 = with_parent(() => state(UNINITIALIZED, stack2));
            sources.set(prop2, s2);
            increment(version);
            if (dev_fallback_default) {
              tag(s2, get_label(path, prop2));
            }
          }
        } else {
          set(s, UNINITIALIZED);
          increment(version);
        }
        return true;
      },
      get(target, prop2, receiver) {
        if (prop2 === STATE_SYMBOL) {
          return value;
        }
        if (dev_fallback_default && prop2 === PROXY_PATH_SYMBOL) {
          return update_path;
        }
        var s = sources.get(prop2);
        var exists = prop2 in target;
        if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
          s = with_parent(() => {
            var p = proxy(exists ? target[prop2] : UNINITIALIZED);
            var s2 = state(p, stack2);
            if (dev_fallback_default) {
              tag(s2, get_label(path, prop2));
            }
            return s2;
          });
          sources.set(prop2, s);
        }
        if (s !== void 0) {
          var v = get(s);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop2, receiver);
      },
      getOwnPropertyDescriptor(target, prop2) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor && "value" in descriptor) {
          var s = sources.get(prop2);
          if (s) descriptor.value = get(s);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop2);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop2) {
        if (prop2 === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop2);
        var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
        if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop2)?.writable)) {
          if (s === void 0) {
            s = with_parent(() => {
              var p = has ? proxy(target[prop2]) : UNINITIALIZED;
              var s2 = state(p, stack2);
              if (dev_fallback_default) {
                tag(s2, get_label(path, prop2));
              }
              return s2;
            });
            sources.set(prop2, s);
          }
          var value2 = get(s);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop2, value2, receiver) {
        var s = sources.get(prop2);
        var has = prop2 in target;
        if (is_proxied_array && prop2 === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = with_parent(() => state(UNINITIALIZED, stack2));
              sources.set(i + "", other_s);
              if (dev_fallback_default) {
                tag(other_s, get_label(path, i));
              }
            }
          }
        }
        if (s === void 0) {
          if (!has || get_descriptor(target, prop2)?.writable) {
            s = with_parent(() => state(void 0, stack2));
            if (dev_fallback_default) {
              tag(s, get_label(path, prop2));
            }
            set(s, proxy(value2));
            sources.set(prop2, s);
          }
        } else {
          has = s.v !== UNINITIALIZED;
          var p = with_parent(() => proxy(value2));
          set(s, p);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n >= ls.v) {
              set(ls, n + 1);
            }
          }
          increment(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key3) => {
          var source3 = sources.get(key3);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key2, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key2 in target)) {
            own_keys.push(key2);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function get_label(path, prop2) {
  if (typeof prop2 === "symbol") return `${path}[Symbol(${prop2.description ?? ""})]`;
  if (regex_is_valid_identifier.test(prop2)) return `${path}.${prop2}`;
  return /^\d+$/.test(prop2) ? `${path}[${prop2}]` : `${path}['${prop2}']`;
}
function get_proxied_value(value) {
  try {
    if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
      return value[STATE_SYMBOL];
    }
  } catch {
  }
  return value;
}
var ARRAY_MUTATING_METHODS = /* @__PURE__ */ new Set([
  "copyWithin",
  "fill",
  "pop",
  "push",
  "reverse",
  "shift",
  "sort",
  "splice",
  "unshift"
]);
function inspectable_array(array) {
  return new Proxy(array, {
    get(target, prop2, receiver) {
      var value = Reflect.get(target, prop2, receiver);
      if (!ARRAY_MUTATING_METHODS.has(
        /** @type {string} */
        prop2
      )) {
        return value;
      }
      return function(...args) {
        set_inspect_effects_deferred();
        var result = value.apply(this, args);
        flush_inspect_effects();
        return result;
      };
    }
  });
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dev/equality.js
function init_array_prototype_warnings() {
  const array_prototype2 = Array.prototype;
  const cleanup = Array.__svelte_cleanup;
  if (cleanup) {
    cleanup();
  }
  const { indexOf, lastIndexOf, includes } = array_prototype2;
  array_prototype2.indexOf = function(item, from_index) {
    const index2 = indexOf.call(this, item, from_index);
    if (index2 === -1) {
      for (let i = from_index ?? 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.indexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.lastIndexOf = function(item, from_index) {
    const index2 = lastIndexOf.call(this, item, from_index ?? this.length - 1);
    if (index2 === -1) {
      for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.lastIndexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.includes = function(item, from_index) {
    const has = includes.call(this, item, from_index);
    if (!has) {
      for (let i = 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.includes(...)");
          break;
        }
      }
    }
    return has;
  };
  Array.__svelte_cleanup = () => {
    array_prototype2.indexOf = indexOf;
    array_prototype2.lastIndexOf = lastIndexOf;
    array_prototype2.includes = includes;
  };
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/operations.js
var $window;
var $document;
var is_firefox;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  $document = document;
  is_firefox = /Firefox/.test(navigator.userAgent);
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype.__click = void 0;
    element_prototype.__className = void 0;
    element_prototype.__attributes = null;
    element_prototype.__style = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype.__t = void 0;
  }
  if (dev_fallback_default) {
    element_prototype.__svelte_meta = null;
    init_array_prototype_warnings();
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function child(node, is_text) {
  if (!hydrating) {
    return /* @__PURE__ */ get_first_child(node);
  }
  var child2 = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ get_first_child(hydrate_node)
  );
  if (child2 === null) {
    child2 = hydrate_node.appendChild(create_text());
  } else if (is_text && child2.nodeType !== TEXT_NODE) {
    var text2 = create_text();
    child2?.before(text2);
    set_hydrate_node(text2);
    return text2;
  }
  set_hydrate_node(child2);
  return child2;
}
function sibling(node, count = 1, is_text = false) {
  let next_sibling = hydrating ? hydrate_node : node;
  var last_sibling;
  while (count--) {
    last_sibling = next_sibling;
    next_sibling = /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(next_sibling);
  }
  if (!hydrating) {
    return next_sibling;
  }
  if (is_text && next_sibling?.nodeType !== TEXT_NODE) {
    var text2 = create_text();
    if (next_sibling === null) {
      last_sibling?.after(text2);
    } else {
      next_sibling.before(text2);
    }
    set_hydrate_node(text2);
    return text2;
  }
  set_hydrate_node(next_sibling);
  return (
    /** @type {TemplateNode} */
    next_sibling
  );
}
function clear_text_content(node) {
  node.textContent = "";
}
function should_defer_append() {
  if (!async_mode_flag) return false;
  if (eager_block_effects !== null) return false;
  var flags2 = (
    /** @type {Effect} */
    active_effect.f
  );
  return (flags2 & EFFECT_RAN) !== 0;
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/reactivity/effects.js
function validate_effect(rune) {
  if (active_effect === null && active_reaction === null) {
    effect_orphan(rune);
  }
  if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0 && active_effect === null) {
    effect_in_unowned_derived();
  }
  if (is_destroying_effect) {
    effect_in_teardown(rune);
  }
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push2 = true) {
  var parent = active_effect;
  if (dev_fallback_default) {
    while (parent !== null && (parent.f & INSPECT_EFFECT) !== 0) {
      parent = parent.parent;
    }
  }
  if (parent !== null && (parent.f & INERT) !== 0) {
    type |= INERT;
  }
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    b: parent && parent.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (dev_fallback_default) {
    effect2.component_function = dev_current_component_function;
  }
  if (sync) {
    try {
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e2) {
      destroy_effect(effect2);
      throw e2;
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  if (push2) {
    var e = effect2;
    if (sync && e.deps === null && e.teardown === null && e.nodes_start === null && e.first === e.last && // either `null`, or a singular child
    (e.f & EFFECT_PRESERVED) === 0) {
      e = e.first;
    }
    if (e !== null) {
      e.parent = parent;
      if (parent !== null) {
        push_effect(e, parent);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
        var derived2 = (
          /** @type {Derived} */
          active_reaction
        );
        (derived2.effects ?? (derived2.effects = [])).push(e);
      }
    }
  }
  return effect2;
}
function user_effect(fn) {
  validate_effect("$effect");
  if (dev_fallback_default) {
    define_property(fn, "name", {
      value: "$effect"
    });
  }
  var flags2 = (
    /** @type {Effect} */
    active_effect.f
  );
  var defer = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && (flags2 & EFFECT_RAN) === 0;
  if (defer) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    (context.e ?? (context.e = [])).push(fn);
  } else {
    return create_user_effect(fn);
  }
}
function create_user_effect(fn) {
  return create_effect(EFFECT | USER_EFFECT, fn, false);
}
function effect_root(fn) {
  Batch.ensure();
  const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn, true);
  return () => {
    destroy_effect(effect2);
  };
}
function component_root(fn) {
  Batch.ensure();
  const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn, true);
  return (options = {}) => {
    return new Promise((fulfil) => {
      if (options.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function async_effect(fn) {
  return create_effect(ASYNC | EFFECT_PRESERVED, fn, true);
}
function render_effect(fn, flags2 = 0) {
  return create_effect(RENDER_EFFECT | flags2, fn, true);
}
function template_effect(fn, sync = [], async2 = []) {
  flatten(sync, async2, (values) => {
    create_effect(RENDER_EFFECT, () => fn(...values.map(get)), true);
  });
}
function block(fn, flags2 = 0) {
  var effect2 = create_effect(BLOCK_EFFECT | flags2, fn, true);
  if (dev_fallback_default) {
    effect2.dev_stack = dev_stack;
  }
  return effect2;
}
function branch(fn, push2 = true) {
  return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn, true, push2);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    const controller = effect2.ac;
    if (controller !== null) {
      without_reactive_context(() => {
        controller.abort(STALE_REACTION);
      });
    }
    var next2 = effect2.next;
    if ((effect2.f & ROOT_EFFECT) !== 0) {
      effect2.parent = null;
    } else {
      destroy_effect(effect2, remove_dom);
    }
    effect2 = next2;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next2 = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next2;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null && effect2.nodes_end !== null) {
    remove_effect_dom(
      effect2.nodes_start,
      /** @type {TemplateNode} */
      effect2.nodes_end
    );
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition2 of transitions) {
      transition2.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  if (dev_fallback_default) {
    effect2.component_function = null;
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = effect2.ac = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next2 = node === end ? null : (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    node.remove();
    node = next2;
  }
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next2 = effect2.next;
  if (prev !== null) prev.next = next2;
  if (next2 !== null) next2.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next2;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition2 of transitions) {
      transition2.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  if (effect2.transitions !== null) {
    for (const transition2 of effect2.transitions) {
      if (transition2.is_global || local) {
        transitions.push(transition2);
      }
    }
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    pause_children(child2, transitions, transparent ? local : false);
    child2 = sibling2;
  }
}
function resume_effect(effect2) {
  resume_children(effect2, true);
}
function resume_children(effect2, local) {
  if ((effect2.f & INERT) === 0) return;
  effect2.f ^= INERT;
  if ((effect2.f & CLEAN) === 0) {
    set_signal_status(effect2, DIRTY);
    schedule_effect(effect2);
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    resume_children(child2, transparent ? local : false);
    child2 = sibling2;
  }
  if (effect2.transitions !== null) {
    for (const transition2 of effect2.transitions) {
      if (transition2.is_global || local) {
        transition2.in();
      }
    }
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/legacy.js
var captured_signals = null;

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/runtime.js
var is_updating_effect = false;
function set_is_updating_effect(value) {
  is_updating_effect = value;
}
var is_destroying_effect = false;
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
var active_reaction = null;
var untracking = false;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
var active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
var current_sources = null;
function push_reaction_value(value) {
  if (active_reaction !== null && (!async_mode_flag || (active_reaction.f & DERIVED) !== 0)) {
    if (current_sources === null) {
      current_sources = [value];
    } else {
      current_sources.push(value);
    }
  }
}
var new_deps = null;
var skipped_deps = 0;
var untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
var write_version = 1;
var read_version = 0;
var update_version = read_version;
function set_update_version(value) {
  update_version = value;
}
var skip_reaction = false;
function increment_write_version() {
  return ++write_version;
}
function is_dirty(reaction) {
  var flags2 = reaction.f;
  if ((flags2 & DIRTY) !== 0) {
    return true;
  }
  if ((flags2 & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags2 & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      var dependency;
      var is_disconnected = (flags2 & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if ((is_disconnected || is_unowned_connected) && (active_effect === null || (active_effect.f & DESTROYED) === 0)) {
        var derived2 = (
          /** @type {Derived} */
          reaction
        );
        var parent = derived2.parent;
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (is_disconnected || !dependency?.reactions?.includes(derived2)) {
            (dependency.reactions ?? (dependency.reactions = [])).push(derived2);
          }
        }
        if (is_disconnected) {
          derived2.f ^= DISCONNECTED;
        }
        if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
          derived2.f ^= UNOWNED;
        }
      }
      for (i = 0; i < length; i++) {
        dependency = dependencies[i];
        if (is_dirty(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect2, root6 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  if (!async_mode_flag && current_sources?.includes(signal)) {
    return;
  }
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        false
      );
    } else if (effect2 === reaction) {
      if (root6) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var _a2;
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var previous_sources = current_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var previous_update_version = update_version;
  var flags2 = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  skip_reaction = (flags2 & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
  active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  current_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  update_version = ++read_version;
  if (reaction.ac !== null) {
    without_reactive_context(() => {
      reaction.ac.abort(STALE_REACTION);
    });
    reaction.ac = null;
  }
  try {
    reaction.f |= REACTION_IS_UPDATING;
    var fn = (
      /** @type {Function} */
      reaction.fn
    );
    var result = fn();
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (flags2 & DERIVED) !== 0 && /** @type {import('#client').Derived} */
      reaction.reactions !== null) {
        for (i = skipped_deps; i < deps.length; i++) {
          ((_a2 = deps[i]).reactions ?? (_a2.reactions = [])).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    if ((reaction.f & ERROR_VALUE) !== 0) {
      reaction.f ^= ERROR_VALUE;
    }
    return result;
  } catch (error) {
    return handle_error(error);
  } finally {
    reaction.f ^= REACTION_IS_UPDATING;
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    current_sources = previous_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    update_version = previous_update_version;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index2 = index_of.call(reactions, signal);
    if (index2 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index2] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags2 = effect2.f;
  if ((flags2 & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var was_updating_effect = is_updating_effect;
  active_effect = effect2;
  is_updating_effect = true;
  if (dev_fallback_default) {
    var previous_component_fn = dev_current_component_function;
    set_dev_current_component_function(effect2.component_function);
    var previous_stack = (
      /** @type {any} */
      dev_stack
    );
    set_dev_stack(effect2.dev_stack ?? dev_stack);
  }
  try {
    if ((flags2 & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    if (dev_fallback_default && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) {
      for (var dep of effect2.deps) {
        if (dep.set_during_effect) {
          dep.wv = increment_write_version();
          dep.set_during_effect = false;
        }
      }
    }
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
    if (dev_fallback_default) {
      set_dev_current_component_function(previous_component_fn);
      set_dev_stack(previous_stack);
    }
  }
}
function get(signal) {
  var flags2 = signal.f;
  var is_derived = (flags2 & DERIVED) !== 0;
  captured_signals?.add(signal);
  if (active_reaction !== null && !untracking) {
    var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
    if (!destroyed && !current_sources?.includes(signal)) {
      var deps = active_reaction.deps;
      if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
        if (signal.rv < read_version) {
          signal.rv = read_version;
          if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
            skipped_deps++;
          } else if (new_deps === null) {
            new_deps = [signal];
          } else if (!skip_reaction || !new_deps.includes(signal)) {
            new_deps.push(signal);
          }
        }
      } else {
        (active_reaction.deps ?? (active_reaction.deps = [])).push(signal);
        var reactions = signal.reactions;
        if (reactions === null) {
          signal.reactions = [active_reaction];
        } else if (!reactions.includes(active_reaction)) {
          reactions.push(active_reaction);
        }
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null && /** @type {Derived} */
  signal.effects === null) {
    var derived2 = (
      /** @type {Derived} */
      signal
    );
    var parent = derived2.parent;
    if (parent !== null && (parent.f & UNOWNED) === 0) {
      derived2.f ^= UNOWNED;
    }
  }
  if (dev_fallback_default) {
    if (current_async_effect) {
      var tracking = (current_async_effect.f & REACTION_IS_UPDATING) !== 0;
      var was_read = current_async_effect.deps?.includes(signal);
      if (!tracking && !untracking && !was_read) {
        await_reactivity_loss(
          /** @type {string} */
          signal.label
        );
        var trace2 = get_stack("TracedAt");
        if (trace2) console.warn(trace2);
      }
    }
    recent_async_deriveds.delete(signal);
    if (tracing_mode_flag && !untracking && tracing_expressions !== null && active_reaction !== null && tracing_expressions.reaction === active_reaction) {
      if (signal.trace) {
        signal.trace();
      } else {
        trace2 = get_stack("TracedAt");
        if (trace2) {
          var entry = tracing_expressions.entries.get(signal);
          if (entry === void 0) {
            entry = { traces: [] };
            tracing_expressions.entries.set(signal, entry);
          }
          var last = entry.traces[entry.traces.length - 1];
          if (trace2.stack !== last?.stack) {
            entry.traces.push(trace2);
          }
        }
      }
    }
  }
  if (is_destroying_effect) {
    if (old_values.has(signal)) {
      return old_values.get(signal);
    }
    if (is_derived) {
      derived2 = /** @type {Derived} */
      signal;
      var value = derived2.v;
      if ((derived2.f & CLEAN) === 0 && derived2.reactions !== null || depends_on_old_values(derived2)) {
        value = execute_derived(derived2);
      }
      old_values.set(derived2, value);
      return value;
    }
  } else if (is_derived) {
    derived2 = /** @type {Derived} */
    signal;
    if (batch_deriveds?.has(derived2)) {
      return batch_deriveds.get(derived2);
    }
    if (is_dirty(derived2)) {
      update_derived(derived2);
    }
  }
  if ((signal.f & ERROR_VALUE) !== 0) {
    throw signal.v;
  }
  return signal.v;
}
function depends_on_old_values(derived2) {
  if (derived2.v === UNINITIALIZED) return true;
  if (derived2.deps === null) return false;
  for (const dep of derived2.deps) {
    if (old_values.has(dep)) {
      return true;
    }
    if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
      /** @type {Derived} */
      dep
    )) {
      return true;
    }
  }
  return false;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
var STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/utils.js
var DOM_BOOLEAN_ATTRIBUTES = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected",
  "webkitdirectory",
  "defer",
  "disablepictureinpicture",
  "disableremoteplayback"
];
var DOM_PROPERTIES = [
  ...DOM_BOOLEAN_ATTRIBUTES,
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  "readOnly",
  "value",
  "volume",
  "defaultValue",
  "defaultChecked",
  "srcObject",
  "noValidate",
  "allowFullscreen",
  "disablePictureInPicture",
  "disableRemotePlayback"
];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
var STATE_CREATION_RUNES = (
  /** @type {const} */
  [
    "$state",
    "$state.raw",
    "$derived",
    "$derived.by"
  ]
);
var RUNES = (
  /** @type {const} */
  [
    ...STATE_CREATION_RUNES,
    "$state.snapshot",
    "$props",
    "$props.id",
    "$bindable",
    "$effect",
    "$effect.pre",
    "$effect.tracking",
    "$effect.root",
    "$effect.pending",
    "$inspect",
    "$inspect().with",
    "$inspect.trace",
    "$host"
  ]
);

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/elements/events.js
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
function delegate(events) {
  for (var i = 0; i < events.length; i++) {
    all_registered_events.add(events[i]);
  }
  for (var fn of root_event_handles) {
    fn(events);
  }
}
var last_propagated_event = null;
function handle_event_propagation(event2) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event2.type;
  var path = event2.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event2.target
  );
  last_propagated_event = event2;
  var path_idx = 0;
  var handled_at = last_propagated_event === event2 && event2.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event2.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event2.target;
  if (current_target === handler_element) return;
  define_property(event2, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event2.target === current_target)) {
          if (is_array(delegated)) {
            var [fn, ...data2] = delegated;
            fn.apply(current_target, [event2, ...data2]);
          } else {
            delegated.call(current_target, event2);
          }
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event2.__root = handler_element;
    delete event2.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
var head_anchor;
function reset_head_anchor() {
  head_anchor = void 0;
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/reconciler.js
function create_fragment_from_html(html2) {
  var elem = document.createElement("template");
  elem.innerHTML = html2.replaceAll("<!>", "<!---->");
  return elem.content;
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/template.js
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes_start === null) {
    effect2.nodes_start = start;
    effect2.nodes_end = end;
  }
}
// @__NO_SIDE_EFFECTS__
function from_html(content, flags2) {
  var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
  var use_import_node = (flags2 & TEMPLATE_USE_IMPORT_NODE) !== 0;
  var node;
  var has_start = !content.startsWith("<!>");
  return () => {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    if (node === void 0) {
      node = create_fragment_from_html(has_start ? content : "<!>" + content);
      if (!is_fragment) node = /** @type {Node} */
      get_first_child(node);
    }
    var clone = (
      /** @type {TemplateNode} */
      use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
    );
    if (is_fragment) {
      var start = (
        /** @type {TemplateNode} */
        get_first_child(clone)
      );
      var end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start, end);
    } else {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
function text(value = "") {
  if (!hydrating) {
    var t = create_text(value + "");
    assign_nodes(t, t);
    return t;
  }
  var node = hydrate_node;
  if (node.nodeType !== TEXT_NODE) {
    node.before(node = create_text());
    set_hydrate_node(node);
  }
  assign_nodes(node, node);
  return node;
}
function append(anchor, dom) {
  if (hydrating) {
    active_effect.nodes_end = hydrate_node;
    hydrate_next();
    return;
  }
  if (anchor === null) {
    return;
  }
  anchor.before(
    /** @type {Node} */
    dom
  );
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/render.js
var should_intro = true;
function set_text(text2, value) {
  var str = value == null ? "" : typeof value === "object" ? value + "" : value;
  if (str !== (text2.__t ?? (text2.__t = text2.nodeValue))) {
    text2.__t = str;
    text2.nodeValue = str + "";
  }
}
function mount(component2, options) {
  return _mount(component2, options);
}
function hydrate(component2, options) {
  init_operations();
  options.intro = options.intro ?? false;
  const target = options.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component2, { ...options, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error instanceof Error && error.message.split("\n").some((line) => line.startsWith("https://svelte.dev/e/"))) {
      throw error;
    }
    if (error !== HYDRATION_ERROR) {
      console.warn("Failed to hydrate: ", error);
    }
    if (options.recover === false) {
      hydration_failed();
    }
    init_operations();
    clear_text_content(target);
    set_hydrating(false);
    return mount(component2, options);
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
    reset_head_anchor();
  }
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive2 = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
      var n = document_listeners.get(event_name);
      if (n === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component2 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context) {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      should_intro = intro;
      component2 = Component(anchor_node, props) || {};
      should_intro = true;
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context) {
        pop();
      }
    });
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component2, unmount2);
  return component2;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component2, options) {
  const fn = mounted_components.get(component2);
  if (fn) {
    mounted_components.delete(component2);
    return fn(options);
  }
  if (dev_fallback_default) {
    lifecycle_double_unmount();
  }
  return Promise.resolve();
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/blocks/if.js
function if_block(node, fn, elseif = false) {
  if (hydrating) {
    hydrate_next();
  }
  var anchor = node;
  var consequent_effect = null;
  var alternate_effect = null;
  var condition = UNINITIALIZED;
  var flags2 = elseif ? EFFECT_TRANSPARENT : 0;
  var has_branch = false;
  const set_branch = (fn2, flag = true) => {
    has_branch = true;
    update_branch(flag, fn2);
  };
  var offscreen_fragment = null;
  function commit() {
    if (offscreen_fragment !== null) {
      offscreen_fragment.lastChild.remove();
      anchor.before(offscreen_fragment);
      offscreen_fragment = null;
    }
    var active = condition ? consequent_effect : alternate_effect;
    var inactive = condition ? alternate_effect : consequent_effect;
    if (active) {
      resume_effect(active);
    }
    if (inactive) {
      pause_effect(inactive, () => {
        if (condition) {
          alternate_effect = null;
        } else {
          consequent_effect = null;
        }
      });
    }
  }
  const update_branch = (new_condition, fn2) => {
    if (condition === (condition = new_condition)) return;
    let mismatch = false;
    if (hydrating) {
      const is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
      if (!!condition === is_else) {
        anchor = remove_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    var defer = should_defer_append();
    var target = anchor;
    if (defer) {
      offscreen_fragment = document.createDocumentFragment();
      offscreen_fragment.append(target = create_text());
    }
    if (condition) {
      consequent_effect ?? (consequent_effect = fn2 && branch(() => fn2(target)));
    } else {
      alternate_effect ?? (alternate_effect = fn2 && branch(() => fn2(target)));
    }
    if (defer) {
      var batch = (
        /** @type {Batch} */
        current_batch
      );
      var active = condition ? consequent_effect : alternate_effect;
      var inactive = condition ? alternate_effect : consequent_effect;
      if (active) batch.skipped_effects.delete(active);
      if (inactive) batch.skipped_effects.add(inactive);
      batch.add_callback(commit);
    } else {
      commit();
    }
    if (mismatch) {
      set_hydrating(true);
    }
  };
  block(() => {
    has_branch = false;
    fn(set_branch);
    if (!has_branch) {
      update_branch(null, null);
    }
  }, flags2);
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/blocks/each.js
var current_each_item = null;
function index(_, i) {
  return i;
}
function pause_effects(state2, items, controlled_anchor) {
  var items_map = state2.items;
  var transitions = [];
  var length = items.length;
  for (var i = 0; i < length; i++) {
    pause_children(items[i].e, transitions, true);
  }
  var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      /** @type {Element} */
      controlled_anchor.parentNode
    );
    clear_text_content(parent_node);
    parent_node.append(
      /** @type {Element} */
      controlled_anchor
    );
    items_map.clear();
    link(state2, items[0].prev, items[length - 1].next);
  }
  run_out_transitions(transitions, () => {
    for (var i2 = 0; i2 < length; i2++) {
      var item = items[i2];
      if (!is_controlled) {
        items_map.delete(item.k);
        link(state2, item.prev, item.next);
      }
      destroy_effect(item.e, !is_controlled);
    }
  });
}
function each(node, flags2, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var state2 = { flags: flags2, items: /* @__PURE__ */ new Map(), first: null };
  var is_controlled = (flags2 & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = hydrating ? set_hydrate_node(
      /** @type {Comment | Text} */
      get_first_child(parent_node)
    ) : parent_node.appendChild(create_text());
  }
  if (hydrating) {
    hydrate_next();
  }
  var fallback2 = null;
  var was_empty = false;
  var offscreen_items = /* @__PURE__ */ new Map();
  var each_array = derived_safe_equal(() => {
    var collection = get_collection();
    return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
  });
  var array;
  var each_effect;
  function commit() {
    reconcile(
      each_effect,
      array,
      state2,
      offscreen_items,
      anchor,
      render_fn,
      flags2,
      get_key,
      get_collection
    );
    if (fallback_fn !== null) {
      if (array.length === 0) {
        if (fallback2) {
          resume_effect(fallback2);
        } else {
          fallback2 = branch(() => fallback_fn(anchor));
        }
      } else if (fallback2 !== null) {
        pause_effect(fallback2, () => {
          fallback2 = null;
        });
      }
    }
  }
  block(() => {
    each_effect ?? (each_effect = /** @type {Effect} */
    active_effect);
    array = /** @type {V[]} */
    get(each_array);
    var length = array.length;
    if (was_empty && length === 0) {
      return;
    }
    was_empty = length === 0;
    let mismatch = false;
    if (hydrating) {
      var is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
      if (is_else !== (length === 0)) {
        anchor = remove_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    if (hydrating) {
      var prev = null;
      var item;
      for (var i = 0; i < length; i++) {
        if (hydrate_node.nodeType === COMMENT_NODE && /** @type {Comment} */
        hydrate_node.data === HYDRATION_END) {
          anchor = /** @type {Comment} */
          hydrate_node;
          mismatch = true;
          set_hydrating(false);
          break;
        }
        var value = array[i];
        var key2 = get_key(value, i);
        item = create_item(
          hydrate_node,
          state2,
          prev,
          null,
          value,
          key2,
          i,
          render_fn,
          flags2,
          get_collection
        );
        state2.items.set(key2, item);
        prev = item;
      }
      if (length > 0) {
        set_hydrate_node(remove_nodes());
      }
    }
    if (hydrating) {
      if (length === 0 && fallback_fn) {
        fallback2 = branch(() => fallback_fn(anchor));
      }
    } else {
      if (should_defer_append()) {
        var keys = /* @__PURE__ */ new Set();
        var batch = (
          /** @type {Batch} */
          current_batch
        );
        for (i = 0; i < length; i += 1) {
          value = array[i];
          key2 = get_key(value, i);
          var existing = state2.items.get(key2) ?? offscreen_items.get(key2);
          if (existing) {
            if ((flags2 & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0) {
              update_item(existing, value, i, flags2);
            }
          } else {
            item = create_item(
              null,
              state2,
              null,
              null,
              value,
              key2,
              i,
              render_fn,
              flags2,
              get_collection,
              true
            );
            offscreen_items.set(key2, item);
          }
          keys.add(key2);
        }
        for (const [key3, item2] of state2.items) {
          if (!keys.has(key3)) {
            batch.skipped_effects.add(item2.e);
          }
        }
        batch.add_callback(commit);
      } else {
        commit();
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
    get(each_array);
  });
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function reconcile(each_effect, array, state2, offscreen_items, anchor, render_fn, flags2, get_key, get_collection) {
  var is_animated = (flags2 & EACH_IS_ANIMATED) !== 0;
  var should_update = (flags2 & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;
  var length = array.length;
  var items = state2.items;
  var first = state2.first;
  var current = first;
  var seen;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key2;
  var item;
  var i;
  if (is_animated) {
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key2 = get_key(value, i);
      item = items.get(key2);
      if (item !== void 0) {
        item.a?.measure();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(item);
      }
    }
  }
  for (i = 0; i < length; i += 1) {
    value = array[i];
    key2 = get_key(value, i);
    item = items.get(key2);
    if (item === void 0) {
      var pending2 = offscreen_items.get(key2);
      if (pending2 !== void 0) {
        offscreen_items.delete(key2);
        items.set(key2, pending2);
        var next2 = prev ? prev.next : current;
        link(state2, prev, pending2);
        link(state2, pending2, next2);
        move(pending2, next2, anchor);
        prev = pending2;
      } else {
        var child_anchor = current ? (
          /** @type {TemplateNode} */
          current.e.nodes_start
        ) : anchor;
        prev = create_item(
          child_anchor,
          state2,
          prev,
          prev === null ? state2.first : prev.next,
          value,
          key2,
          i,
          render_fn,
          flags2,
          get_collection
        );
      }
      items.set(key2, prev);
      matched = [];
      stashed = [];
      current = prev.next;
      continue;
    }
    if (should_update) {
      update_item(item, value, i, flags2);
    }
    if ((item.e.f & INERT) !== 0) {
      resume_effect(item.e);
      if (is_animated) {
        item.a?.unfix();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(item);
      }
    }
    if (item !== current) {
      if (seen !== void 0 && seen.has(item)) {
        if (matched.length < stashed.length) {
          var start = stashed[0];
          var j;
          prev = start.prev;
          var a = matched[0];
          var b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1) {
            move(matched[j], start, anchor);
          }
          for (j = 0; j < stashed.length; j += 1) {
            seen.delete(stashed[j]);
          }
          link(state2, a.prev, b.next);
          link(state2, prev, a);
          link(state2, b, start);
          current = start;
          prev = b;
          i -= 1;
          matched = [];
          stashed = [];
        } else {
          seen.delete(item);
          move(item, current, anchor);
          link(state2, item.prev, item.next);
          link(state2, item, prev === null ? state2.first : prev.next);
          link(state2, prev, item);
          prev = item;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current.k !== key2) {
        if ((current.e.f & INERT) === 0) {
          (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
        }
        stashed.push(current);
        current = current.next;
      }
      if (current === null) {
        continue;
      }
      item = current;
    }
    matched.push(item);
    prev = item;
    current = item.next;
  }
  if (current !== null || seen !== void 0) {
    var to_destroy = seen === void 0 ? [] : array_from(seen);
    while (current !== null) {
      if ((current.e.f & INERT) === 0) {
        to_destroy.push(current);
      }
      current = current.next;
    }
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags2 & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].a?.measure();
        }
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].a?.fix();
        }
      }
      pause_effects(state2, to_destroy, controlled_anchor);
    }
  }
  if (is_animated) {
    queue_micro_task(() => {
      if (to_animate === void 0) return;
      for (item of to_animate) {
        item.a?.apply();
      }
    });
  }
  each_effect.first = state2.first && state2.first.e;
  each_effect.last = prev && prev.e;
  for (var unused of offscreen_items.values()) {
    destroy_effect(unused.e);
  }
  offscreen_items.clear();
}
function update_item(item, value, index2, type) {
  if ((type & EACH_ITEM_REACTIVE) !== 0) {
    internal_set(item.v, value);
  }
  if ((type & EACH_INDEX_REACTIVE) !== 0) {
    internal_set(
      /** @type {Value<number>} */
      item.i,
      index2
    );
  } else {
    item.i = index2;
  }
}
function create_item(anchor, state2, prev, next2, value, key2, index2, render_fn, flags2, get_collection, deferred2) {
  var previous_each_item = current_each_item;
  var reactive = (flags2 & EACH_ITEM_REACTIVE) !== 0;
  var mutable = (flags2 & EACH_ITEM_IMMUTABLE) === 0;
  var v = reactive ? mutable ? mutable_source(value, false, false) : source(value) : value;
  var i = (flags2 & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
  if (dev_fallback_default && reactive) {
    v.trace = () => {
      var collection_index = typeof i === "number" ? index2 : i.v;
      get_collection()[collection_index];
    };
  }
  var item = {
    i,
    v,
    k: key2,
    a: null,
    // @ts-expect-error
    e: null,
    prev,
    next: next2
  };
  current_each_item = item;
  try {
    if (anchor === null) {
      var fragment = document.createDocumentFragment();
      fragment.append(anchor = create_text());
    }
    item.e = branch(() => render_fn(
      /** @type {Node} */
      anchor,
      v,
      i,
      get_collection
    ), hydrating);
    item.e.prev = prev && prev.e;
    item.e.next = next2 && next2.e;
    if (prev === null) {
      if (!deferred2) {
        state2.first = item;
      }
    } else {
      prev.next = item;
      prev.e.next = item.e;
    }
    if (next2 !== null) {
      next2.prev = item;
      next2.e.prev = item.e;
    }
    return item;
  } finally {
    current_each_item = previous_each_item;
  }
}
function move(item, next2, anchor) {
  var end = item.next ? (
    /** @type {TemplateNode} */
    item.next.e.nodes_start
  ) : anchor;
  var dest = next2 ? (
    /** @type {TemplateNode} */
    next2.e.nodes_start
  ) : anchor;
  var node = (
    /** @type {TemplateNode} */
    item.e.nodes_start
  );
  while (node !== null && node !== end) {
    var next_node = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    dest.before(node);
    node = next_node;
  }
}
function link(state2, prev, next2) {
  if (prev === null) {
    state2.first = next2;
  } else {
    prev.next = next2;
    prev.e.next = next2 && next2.e;
  }
  if (next2 !== null) {
    next2.prev = prev;
    next2.e.prev = prev && prev.e;
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function snippet(node, get_snippet, ...args) {
  var anchor = node;
  var snippet2 = noop;
  var snippet_effect;
  block(() => {
    if (snippet2 === (snippet2 = get_snippet())) return;
    if (snippet_effect) {
      destroy_effect(snippet_effect);
      snippet_effect = null;
    }
    if (dev_fallback_default && snippet2 == null) {
      invalid_snippet();
    }
    snippet_effect = branch(() => (
      /** @type {SnippetFn} */
      snippet2(anchor, ...args)
    ));
  }, EFFECT_TRANSPARENT);
  if (hydrating) {
    anchor = hydrate_node;
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/shared/attributes.js
var whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/elements/attributes.js
var CLASS = Symbol("class");
var STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element");
var IS_HTML = Symbol("is html");
function set_attribute2(element2, attribute, value, skip_warning) {
  var attributes = get_attributes(element2);
  if (hydrating) {
    attributes[attribute] = element2.getAttribute(attribute);
    if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === "LINK") {
      if (!skip_warning) {
        check_src_in_dev_hydration(element2, attribute, value ?? "");
      }
      return;
    }
  }
  if (attributes[attribute] === (attributes[attribute] = value)) return;
  if (attribute === "loading") {
    element2[LOADING_ATTR_SYMBOL] = value;
  }
  if (value == null) {
    element2.removeAttribute(attribute);
  } else if (typeof value !== "string" && get_setters(element2).includes(attribute)) {
    element2[attribute] = value;
  } else {
    element2.setAttribute(attribute, value);
  }
}
function get_attributes(element2) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    element2.__attributes ?? (element2.__attributes = {
      [IS_CUSTOM_ELEMENT]: element2.nodeName.includes("-"),
      [IS_HTML]: element2.namespaceURI === NAMESPACE_HTML
    })
  );
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element2) {
  var cache_key = element2.getAttribute("is") || element2.nodeName;
  var setters = setters_cache.get(cache_key);
  if (setters) return setters;
  setters_cache.set(cache_key, setters = []);
  var descriptors;
  var proto = element2;
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key2 in descriptors) {
      if (descriptors[key2].set) {
        setters.push(key2);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
function check_src_in_dev_hydration(element2, attribute, value) {
  if (!dev_fallback_default) return;
  if (attribute === "srcset" && srcset_url_equal(element2, value)) return;
  if (src_url_equal(element2.getAttribute(attribute) ?? "", value)) return;
  hydration_attribute_changed(
    attribute,
    element2.outerHTML.replace(element2.innerHTML, element2.innerHTML && "..."),
    String(value)
  );
}
function src_url_equal(element_src, url) {
  if (element_src === url) return true;
  return new URL(element_src, document.baseURI).href === new URL(url, document.baseURI).href;
}
function split_srcset(srcset) {
  return srcset.split(",").map((src) => src.trim().split(" ").filter(Boolean));
}
function srcset_url_equal(element2, srcset) {
  var element_urls = split_srcset(element2.srcset);
  var urls = split_srcset(srcset);
  return urls.length === element_urls.length && urls.every(
    ([url, width], i) => width === element_urls[i][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
  );
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/reactivity/store.js
var is_store_binding = false;
var IS_UNMOUNTED = Symbol();
function capture_store_binding(fn) {
  var previous_is_store_binding = is_store_binding;
  try {
    is_store_binding = false;
    return [fn(), is_store_binding];
  } finally {
    is_store_binding = previous_is_store_binding;
  }
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/reactivity/props.js
function prop(props, key2, flags2, fallback2) {
  var runes = !legacy_mode_flag || (flags2 & PROPS_IS_RUNES) !== 0;
  var bindable = (flags2 & PROPS_IS_BINDABLE) !== 0;
  var lazy = (flags2 & PROPS_IS_LAZY_INITIAL) !== 0;
  var fallback_value = (
    /** @type {V} */
    fallback2
  );
  var fallback_dirty = true;
  var get_fallback = () => {
    if (fallback_dirty) {
      fallback_dirty = false;
      fallback_value = lazy ? untrack(
        /** @type {() => V} */
        fallback2
      ) : (
        /** @type {V} */
        fallback2
      );
    }
    return fallback_value;
  };
  var setter;
  if (bindable) {
    var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
    setter = get_descriptor(props, key2)?.set ?? (is_entry_props && key2 in props ? (v) => props[key2] = v : void 0);
  }
  var initial_value;
  var is_store_sub = false;
  if (bindable) {
    [initial_value, is_store_sub] = capture_store_binding(() => (
      /** @type {V} */
      props[key2]
    ));
  } else {
    initial_value = /** @type {V} */
    props[key2];
  }
  if (initial_value === void 0 && fallback2 !== void 0) {
    initial_value = get_fallback();
    if (setter) {
      if (runes) props_invalid_value(key2);
      setter(initial_value);
    }
  }
  var getter;
  if (runes) {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key2]
      );
      if (value === void 0) return get_fallback();
      fallback_dirty = true;
      return value;
    };
  } else {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key2]
      );
      if (value !== void 0) {
        fallback_value = /** @type {V} */
        void 0;
      }
      return value === void 0 ? fallback_value : value;
    };
  }
  if (runes && (flags2 & PROPS_IS_UPDATED) === 0) {
    return getter;
  }
  if (setter) {
    var legacy_parent = props.$$legacy;
    return (
      /** @type {() => V} */
      (function(value, mutation) {
        if (arguments.length > 0) {
          if (!runes || !mutation || legacy_parent || is_store_sub) {
            setter(mutation ? getter() : value);
          }
          return value;
        }
        return getter();
      })
    );
  }
  var overridden = false;
  var d = ((flags2 & PROPS_IS_IMMUTABLE) !== 0 ? derived : derived_safe_equal)(() => {
    overridden = false;
    return getter();
  });
  if (dev_fallback_default) {
    d.label = key2;
  }
  if (bindable) get(d);
  var parent_effect = (
    /** @type {Effect} */
    active_effect
  );
  return (
    /** @type {() => V} */
    (function(value, mutation) {
      if (arguments.length > 0) {
        const new_value = mutation ? get(d) : runes && bindable ? proxy(value) : value;
        set(d, new_value);
        overridden = true;
        if (fallback_value !== void 0) {
          fallback_value = new_value;
        }
        return value;
      }
      if (is_destroying_effect && overridden || (parent_effect.f & DESTROYED) !== 0) {
        return d.v;
      }
      return get(d);
    })
  );
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/legacy/legacy-client.js
function createClassComponent(options) {
  return new Svelte4Component(options);
}
var _events, _instance;
var Svelte4Component = class {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options) {
    /** @type {any} */
    __privateAdd(this, _events);
    /** @type {Record<string, any>} */
    __privateAdd(this, _instance);
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key2, value) => {
      var s = mutable_source(value, false, false);
      sources.set(key2, s);
      return s;
    };
    const props = new Proxy(
      { ...options.props || {}, $$events: {} },
      {
        get(target, prop2) {
          return get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
        },
        has(target, prop2) {
          if (prop2 === LEGACY_PROPS) return true;
          get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          return Reflect.has(target, prop2);
        },
        set(target, prop2, value) {
          set(sources.get(prop2) ?? add_source(prop2, value), value);
          return Reflect.set(target, prop2, value);
        }
      }
    );
    __privateSet(this, _instance, (options.hydrate ? hydrate : mount)(options.component, {
      target: options.target,
      anchor: options.anchor,
      props,
      context: options.context,
      intro: options.intro ?? false,
      recover: options.recover
    }));
    if (!async_mode_flag && (!options?.props?.$$host || options.sync === false)) {
      flushSync();
    }
    __privateSet(this, _events, props.$$events);
    for (const key2 of Object.keys(__privateGet(this, _instance))) {
      if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
      define_property(this, key2, {
        get() {
          return __privateGet(this, _instance)[key2];
        },
        /** @param {any} value */
        set(value) {
          __privateGet(this, _instance)[key2] = value;
        },
        enumerable: true
      });
    }
    __privateGet(this, _instance).$set = /** @param {Record<string, any>} next */
    (next2) => {
      Object.assign(props, next2);
    };
    __privateGet(this, _instance).$destroy = () => {
      unmount(__privateGet(this, _instance));
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    __privateGet(this, _instance).$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event2, callback) {
    __privateGet(this, _events)[event2] = __privateGet(this, _events)[event2] || [];
    const cb = (...args) => callback.call(this, ...args);
    __privateGet(this, _events)[event2].push(cb);
    return () => {
      __privateGet(this, _events)[event2] = __privateGet(this, _events)[event2].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    __privateGet(this, _instance).$destroy();
  }
};
_events = new WeakMap();
_instance = new WeakMap();

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/client/dom/elements/custom-element.js
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {*} use_shadow_dom
     */
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      super();
      /** The Svelte component constructor */
      __publicField(this, "$$ctor");
      /** Slots */
      __publicField(this, "$$s");
      /** @type {any} The Svelte component instance */
      __publicField(this, "$$c");
      /** Whether or not the custom element is connected */
      __publicField(this, "$$cn", false);
      /** @type {Record<string, any>} Component props data */
      __publicField(this, "$$d", {});
      /** `true` if currently in the process of reflecting component props back to attributes */
      __publicField(this, "$$r", false);
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      __publicField(this, "$$p_d", {});
      /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
      __publicField(this, "$$l", {});
      /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
      __publicField(this, "$$l_u", /* @__PURE__ */ new Map());
      /** @type {any} The managed render effect for reflecting attributes */
      __publicField(this, "$$me");
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
      }
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return (anchor) => {
            const slot2 = document.createElement("slot");
            if (name !== "default") slot2.name = name;
            append(anchor, slot2);
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            if (name === "default" && !this.$$d.children) {
              this.$$d.children = create_slot(name);
              $$slots.default = true;
            } else {
              $$slots[name] = create_slot(name);
            }
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        for (const key2 in this.$$p_d) {
          if (!(key2 in this.$$d) && this[key2] !== void 0) {
            this.$$d[key2] = this[key2];
            delete this[key2];
          }
        }
        this.$$c = createClassComponent({
          component: this.$$ctor,
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$host: this
          }
        });
        this.$$me = effect_root(() => {
          render_effect(() => {
            this.$$r = true;
            for (const key2 of object_keys(this.$$c)) {
              if (!this.$$p_d[key2]?.reflect) continue;
              this.$$d[key2] = this.$$c[key2];
              const attribute_value = get_custom_element_value(
                key2,
                this.$$d[key2],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key2].attribute || key2);
              } else {
                this.setAttribute(this.$$p_d[key2].attribute || key2, attribute_value);
              }
            }
            this.$$r = false;
          });
        });
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    /**
     * @param {string} attr
     * @param {string} _oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(attr2, _oldValue, newValue) {
      if (this.$$r) return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      this.$$c?.$set({ [attr2]: this.$$d[attr2] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn && this.$$c) {
          this.$$c.$destroy();
          this.$$me();
          this.$$c = void 0;
        }
      });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(attribute_name) {
      return object_keys(this.$$p_d).find(
        (key2) => this.$$p_d[key2].attribute === attribute_name || !this.$$p_d[key2].attribute && key2.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop2, value, props_definition, transform) {
  const type = props_definition[prop2]?.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop2]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      // conversion already handled above
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach((node) => {
    result[
      /** @type {Element} node */
      node.slot || "default"
    ] = true;
  });
  return result;
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/index-client.js
if (dev_fallback_default) {
  let throw_rune_error = function(rune) {
    if (!(rune in globalThis)) {
      let value;
      Object.defineProperty(globalThis, rune, {
        configurable: true,
        // eslint-disable-next-line getter-return
        get: () => {
          if (value !== void 0) {
            return value;
          }
          rune_outside_svelte(rune);
        },
        set: (v) => {
          value = v;
        }
      });
    }
  };
  throw_rune_error("$state");
  throw_rune_error("$effect");
  throw_rune_error("$derived");
  throw_rune_error("$inspect");
  throw_rune_error("$props");
  throw_rune_error("$bindable");
}

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/version.js
var PUBLIC_VERSION = "5";

// node_modules/.pnpm/svelte@5.38.10/node_modules/svelte/src/internal/disclose-version.js
var _a;
if (typeof window !== "undefined") {
  ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(PUBLIC_VERSION);
}

// client/RadioLink.svelte
var onclick = (event2, on_express_desire_to_navigate) => {
  event2.preventDefault();
  on_express_desire_to_navigate();
};
var onkeydown = (event2, on_express_desire_to_navigate) => {
  if (event2.code === "Space") {
    event2.preventDefault();
    on_express_desire_to_navigate();
  }
};
var root = from_html(`<a role="radio" class="svelte-eew6ub"><!></a>`);
function RadioLink($$anchor, $$props) {
  push($$props, true);
  let group_value = prop($$props, "group_value", 15), large = prop($$props, "large", 3, false), disabled = prop($$props, "disabled", 3, false);
  let active = user_derived(() => group_value() === $$props.name);
  let href = user_derived(() => $$props.get_altered_query_string($$props.group_name, $$props.name));
  const on_express_desire_to_navigate = () => {
    if (disabled()) {
      return;
    }
    history.replaceState(null, "", get(href));
    group_value($$props.name);
  };
  var a = root();
  a.__click = [onclick, on_express_desire_to_navigate];
  a.__keydown = [onkeydown, on_express_desire_to_navigate];
  var node = child(a);
  snippet(node, () => $$props.children);
  reset(a);
  template_effect(() => {
    set_attribute2(a, "href", disabled() ? null : get(href));
    set_attribute2(a, "data-disabled", disabled());
    set_attribute2(a, "data-active", get(active));
    set_attribute2(a, "aria-checked", get(active));
    set_attribute2(a, "data-large", large());
  });
  append($$anchor, a);
  pop();
}
delegate(["click", "keydown"]);

// client/ImageLinkLayout.svelte
var root2 = from_html(`<div class="image-link-layout svelte-nv020b"><div class="image svelte-nv020b"><!></div> <div class="text svelte-nv020b"><!></div></div>`);
function ImageLinkLayout($$anchor, $$props) {
  var div = root2();
  var div_1 = child(div);
  var node = child(div_1);
  snippet(node, () => $$props.image);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_1 = child(div_2);
  snippet(node_1, () => $$props.text);
  reset(div_2);
  reset(div);
  append($$anchor, div);
}

// client/PistolSizeSelector.svelte
var root_2 = from_html(`<img src="silhouettes/micro.svg" alt="Micro pistol silhouette" style="width: var(--base_image_width);"/>`);
var root_3 = from_html(`<div class="text_snippet svelte-11eufp1"><strong>Micro</strong> <small class="svelte-11eufp1">It's pretty small</small></div>`);
var root_5 = from_html(`<img src="silhouettes/compact.svg" alt="Compact pistol silhouette" style="width: calc(var(--base_image_width) * 1.14369501);"/>`);
var root_6 = from_html(`<div class="text_snippet svelte-11eufp1"><strong>Compact</strong> <small class="svelte-11eufp1">About half an inch longer, several credit cards wider</small></div>`);
var root_8 = from_html(`<img src="silhouettes/full_size_s.svg" alt="Full size pistol silhouette" style="width: calc(var(--base_image_width) * 1.14369501);"/>`);
var root_9 = from_html(`<div class="text_snippet svelte-11eufp1"><strong>Full Size</strong> <small class="svelte-11eufp1">Longer handle if you have big hands or want an extra 2 rounds per
						magazine</small></div>`);
var root3 = from_html(`<div class="pistol-size svelte-11eufp1"><!> <!> <!></div>`);
function PistolSizeSelector($$anchor, $$props) {
  push($$props, true);
  let size = prop($$props, "size", 15);
  var div = root3();
  var node = child(div);
  RadioLink(node, {
    group_name: "size",
    name: "micro",
    large: true,
    get get_altered_query_string() {
      return $$props.get_altered_query_string;
    },
    get group_value() {
      return size();
    },
    set group_value($$value) {
      size($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      {
        const image = ($$anchor3) => {
          var img = root_2();
          append($$anchor3, img);
        };
        const text2 = ($$anchor3) => {
          var div_1 = root_3();
          append($$anchor3, div_1);
        };
        ImageLinkLayout($$anchor2, { image, text: text2, $$slots: { image: true, text: true } });
      }
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  RadioLink(node_1, {
    group_name: "size",
    name: "compact",
    large: true,
    get get_altered_query_string() {
      return $$props.get_altered_query_string;
    },
    get group_value() {
      return size();
    },
    set group_value($$value) {
      size($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      {
        const image = ($$anchor3) => {
          var img_1 = root_5();
          append($$anchor3, img_1);
        };
        const text2 = ($$anchor3) => {
          var div_2 = root_6();
          append($$anchor3, div_2);
        };
        ImageLinkLayout($$anchor2, { image, text: text2, $$slots: { image: true, text: true } });
      }
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  RadioLink(node_2, {
    group_name: "size",
    name: "full_size_s",
    large: true,
    get get_altered_query_string() {
      return $$props.get_altered_query_string;
    },
    get group_value() {
      return size();
    },
    set group_value($$value) {
      size($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      {
        const image = ($$anchor3) => {
          var img_2 = root_8();
          append($$anchor3, img_2);
        };
        const text2 = ($$anchor3) => {
          var div_3 = root_9();
          append($$anchor3, div_3);
        };
        ImageLinkLayout($$anchor2, { image, text: text2, $$slots: { image: true, text: true } });
      }
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
  pop();
}

// client/FilterSelection.svelte
var root4 = from_html(`<div class="filter-selection svelte-8b3y4w"><div class="explanation svelte-8b3y4w"><strong class="svelte-8b3y4w"> </strong> <small class="svelte-8b3y4w"> </small></div> <div class="filter-options svelte-8b3y4w"></div></div>`);
function FilterSelection($$anchor, $$props) {
  push($$props, true);
  let selected_value = prop($$props, "selected_value", 15);
  var div = root4();
  var div_1 = child(div);
  var strong = child(div_1);
  var text2 = child(strong, true);
  reset(strong);
  var small = sibling(strong, 2);
  var text_1 = child(small, true);
  reset(small);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  each(div_2, 21, () => $$props.options, index, ($$anchor2, option) => {
    {
      let $0 = user_derived(() => get(option).disabled ?? false);
      RadioLink($$anchor2, {
        get group_name() {
          return $$props.group_name;
        },
        get name() {
          return get(option).value;
        },
        get get_altered_query_string() {
          return $$props.get_altered_query_string;
        },
        get disabled() {
          return get($0);
        },
        get group_value() {
          return selected_value();
        },
        set group_value($$value) {
          selected_value($$value);
        },
        children: ($$anchor3, $$slotProps) => {
          next();
          var text_2 = text();
          template_effect(() => set_text(text_2, get(option).label));
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
    }
  });
  reset(div_2);
  reset(div);
  template_effect(() => {
    set_text(text2, $$props.title);
    set_text(text_1, $$props.description);
  });
  append($$anchor, div);
  pop();
}

// lib/assert.ts
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}
var assert_default = assert;

// client/generate_title.ts
var get_size = (product) => {
  const { size } = product;
  if (size === "micro") {
    return "Micro";
  }
  if (size === "compact") {
    return "Compact";
  }
  if (size === "full_size_s") {
    return "Full Size";
  }
  throw new Error(`Unknown size: ${size}`);
};
var join_non_null_values = (values) => {
  return values.filter(Boolean).join(", ");
};
var get_optic_compatibility = (product) => {
  const { optic_compatibility } = product;
  if (product.optic_compatibility === "none") {
    return null;
  }
  if (optic_compatibility === "rmr") {
    return "RMR compatible";
  }
  if (optic_compatibility === "shield_rmsc") {
    return "Shield RMSc compatible";
  }
  throw new Error(`Unknown optic compatibility: ${optic_compatibility}`);
};
var get_slide_coating = (product) => {
  const { slide_coating } = product;
  if (slide_coating === "none") {
    return null;
  }
  if (slide_coating === "dlc") {
    return "diamond-like slide coating";
  }
  if (slide_coating === "cerakote") {
    return "ceramic slide coating";
  }
  throw new Error(`Unknown slide coating: ${slide_coating}`);
};
var generate_title = (product, metadata, current_filters) => {
  return join_non_null_values([
    get_size(product),
    // get_color(product, metadata),
    product.threaded_barrel && current_filters.threaded_barrel === "any" ? "Threaded" : null,
    product.night_sight && current_filters.night_sight === "any" ? "Night Sights" : null,
    // (product.compensated_slide && current_filters.compensated_slide === 'any') ? 'Compensated Slide' : null,
    product.longer_barrel && current_filters.longer_barrel === "any" ? "(Longer Barrel)" : null,
    current_filters.optic_compatibility === "any" ? get_optic_compatibility(product) : null,
    get_slide_coating(product),
    product.number_of_included_mags > 1 ? `${product.number_of_included_mags} Magazines` : null
  ]);
};
var generate_title_default = generate_title;

// client/querystring_store.svelte.ts
var in_browser = typeof window !== "undefined" && window.location;
var parse_query_string = () => {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
};
var update_browser_url = (state2) => {
  const query_string = new URLSearchParams(state2).toString();
  const new_url = query_string ? "?" + query_string : "";
  if (new_url) {
    window.history.replaceState({}, "", new_url);
  }
};
var create_proxy_with_default_values_proxying_to_querystring_params = ({ params, defaults, initial_params }) => {
  const proxy_params_with_defaults = proxy({ ...defaults, ...initial_params });
  return new Proxy(proxy_params_with_defaults, {
    set(target, prop2, value) {
      if (prop2 in defaults && defaults[prop2] === value) {
        delete params[prop2];
      } else {
        params[prop2] = value;
      }
      target[prop2] = value;
      return true;
    },
    deleteProperty(target, prop2) {
      delete params[prop2];
      if (prop2 in defaults) {
        const default_value = defaults[prop2];
        target[prop2] = default_value;
      } else {
        delete target[prop2];
      }
      return true;
    }
  });
};
var create_querystring_store = (defaults) => {
  const initial_params = in_browser ? parse_query_string() : {};
  const params = proxy(initial_params);
  const params_with_defaults = create_proxy_with_default_values_proxying_to_querystring_params({ params, defaults, initial_params });
  user_effect(() => {
    update_browser_url(params);
  });
  return {
    // params aren't mirrored back to params_with_defaults yet
    // params,
    params_with_defaults,
    get_altered_query_string: (param, value) => {
      const { [param]: _, ...rest } = params;
      const altered_value_is_the_same_as_the_default = value === defaults[param];
      const new_params = altered_value_is_the_same_as_the_default ? rest : { ...rest, [param]: String(value) };
      return "?" + new URLSearchParams(new_params).toString();
    }
  };
};

// client/daggers-data.ts
var data = {
  "daggers": [
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm, Pistol with SW1 RMR RearSight Slide, Sniper Green, Threaded Barrel, with Black Frame",
      "psa_url": "https://palmettostatearmory.com/dg02-51655130972.html",
      "price": 369.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/5/1/51655130972_1.jpg",
      "image_file_name": "dg02-51655130972.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.65,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Custom Compact Dagger RMR Pistol With Chameleon Fluted Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-custom-compact-dagger-rmr-pistol-with-chameleon-spiral-fluted-barrel-black.html",
      "price": 449.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655189569_52125_1.jpg",
      "image_file_name": "psa-custom-compact-dagger-rmr-pistol-with-chameleon-spiral-fluted-barrel-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Custom Compact Dagger RMR Pistol With Threaded DLC Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-custom-compact-dagger-rmr-pistol-with-threaded-dlc-barrel-black.html",
      "price": 449.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655189566_51225_1.jpg",
      "image_file_name": "psa-custom-compact-dagger-rmr-pistol-with-threaded-dlc-barrel-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Custom Compact Dagger RMR Pistol With Threaded Rose Gold Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-custom-compact-dagger-rmr-pistol-with-threaded-rose-gold-barrel-black.html",
      "price": 449.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655189568_51225_1.jpg",
      "image_file_name": "psa-custom-compact-dagger-rmr-pistol-with-threaded-rose-gold-barrel-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Custom Compact Dagger RMR Pistol With Threaded Stainless Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-custom-compact-dagger-rmr-pistol-with-threaded-stainless-barrel-black.html",
      "price": 449.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655189567_51225_1.jpg",
      "image_file_name": "psa-custom-compact-dagger-rmr-pistol-with-threaded-stainless-barrel-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Custom Compact Dagger RMR Pistol With Threaded TiN Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-custom-compact-dagger-rmr-pistol-with-threaded-tin-barrel-black.html",
      "price": 449.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655186852_51225_1.jpg",
      "image_file_name": "psa-custom-compact-dagger-rmr-pistol-with-threaded-tin-barrel-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol - Shield Cut With Night Sights, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-9mm-pistol-shield-cut-with-night-sights-black.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655152685_42524_1_1_.jpg",
      "image_file_name": "psa-dagger-9mm-pistol-shield-cut-with-night-sights-black.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": true,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol Extreme Carry Cut Slide with Night Sights & Non-Threaded Barrel, Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-extreme-carry-cut-slide-with-night-sights-non-threaded-barrel-sniper-green-2.html",
      "price": 329.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/5/1/51655129779_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-extreme-carry-cut-slide-with-night-sights-non-threaded-barrel-sniper-green-2.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": true,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "none",
      "frame_color": "sniper_green",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With C-1 RMR Compensated Slide, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-c-1-rmr-compensated-slide-black.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655185370_3725_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-c-1-rmr-compensated-slide-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With C-1 RMR Compensated Slide, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-c-1-rmr-compensated-slide-flat-dark-earth.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655185371_3725_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-c-1-rmr-compensated-slide-flat-dark-earth.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With C-1 RMR Compensated Slide, Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-c-1-rmr-compensated-slide-sniper-green.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655185372_3725_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-c-1-rmr-compensated-slide-sniper-green.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol with Extreme Carry Cuts,  Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-black-dlc.html",
      "price": 299.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/9/1/910115111_51024_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-black-dlc.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With Extreme Carry Cuts, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-flat-dark-earth.html",
      "price": 299.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655128741_51024_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-flat-dark-earth.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": "flat_dark_earth",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol with Extreme Carry Cuts & Night Sights, Black DLC",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-night-sights-black-dlc-2.html",
      "price": 329.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/9/1/910125111_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-night-sights-black-dlc-2.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": true,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm RMR Pistol with Extreme Carry Cuts - 2-Tone Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-rmr-slide-ameriglo-lower-1-3-co-witness-sights-2-tone-flat-dark-earth-with-psa-soft-case.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655116726_1_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-rmr-slide-ameriglo-lower-1-3-co-witness-sights-2-tone-flat-dark-earth-with-psa-soft-case.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With Extreme Carry Cuts RMR Slide, Threaded Barrel - 2-Tone Sniper Green With PSA Soft Case",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-rmr-slide-ameriglo-lower-1-3-co-witness-sights-threaded-barrel-2-tone-sniper-green-with-psa-soft-case.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655116727_1_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-rmr-slide-ameriglo-lower-1-3-co-witness-sights-threaded-barrel-2-tone-sniper-green-with-psa-soft-case.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol with Extreme Carry Cuts RMR Slide, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-rmr-slide-black.html",
      "price": 349.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/9/1/910132111-1_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-rmr-slide-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": null,
      "slide_coating": "dlc",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm RMR Pistol W/Threaded Barrel, 10 - 15rd Magazines, & Pistol Case, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-rmr-threaded-barrel-with-10-15rd-magazines-pistol-case-flat-dark-earth.html",
      "price": 459.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/s/c/screenshot_2023-03-08_at_9.24.34_am_1.png",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-rmr-threaded-barrel-with-10-15rd-magazines-pistol-case-flat-dark-earth.jpg",
      "size": "compact",
      "width": 0,
      "length": 0,
      "height": 0,
      "barrel_length": 0,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": null,
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 10,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With Extreme Carry Cuts, Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-sniper-green.html",
      "price": 299.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/5/1/51655129773_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-extreme-carry-cuts-sniper-green.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "sniper_green",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW1 ECC RMR Slide & Threaded Barrel w/10-15rd Mag and Bag, Sniper Green(Rear Sight Rear)",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw1-ecc-rmr-slide-threaded-barrel-w-10-15rd-mag-and-bag-sniper-green-rear-sight-rear.html",
      "price": 469.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/5/1/51655134997_1_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw1-ecc-rmr-slide-threaded-barrel-w-10-15rd-mag-and-bag-sniper-green-rear-sight-rear.jpg",
      "size": "compact",
      "width": 0,
      "length": 0,
      "height": 0,
      "barrel_length": 0,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": null,
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 10,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW1 Extreme Carry Cut RMR Slide & Non-Threaded Barrel, 2-Tone Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-non-threaded-barrel-2-tone-flat-dark-earth.html",
      "price": 369.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655125591_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-non-threaded-barrel-2-tone-flat-dark-earth.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW1 Extreme Carry Cut RMR Slide & Non-Threaded Barrel, 2-Tone Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-non-threaded-barrel-2-tone-sniper-green.html",
      "price": 369.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655125592_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-non-threaded-barrel-2-tone-sniper-green.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW1 Extreme Carry Cut RMR Slide & Non-Threaded Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-non-threaded-barrel-black-dlc.html",
      "price": 369.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655125590_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-non-threaded-barrel-black-dlc.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW1 Extreme Carry Cut RMR Slide & Threaded Barrel, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-threaded-barrel-2-tone-flat-dark-earth2.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/7/a/7a4a2500_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-threaded-barrel-2-tone-flat-dark-earth2.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": "flat_dark_earth",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW1 Extreme Carry Cut RMR Slide & Threaded Barrel, 2-Tone Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-threaded-barrel-2-tone-sniper-green.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/7/a/7a4a7801_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-threaded-barrel-2-tone-sniper-green.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW1 Extreme Carry Cut RMR Slide & Threaded Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-threaded-barrel-black-dlc.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655124750_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw1-extreme-carry-cut-rmr-slide-threaded-barrel-black-dlc.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW1 RMR Slide & Stainless Threaded Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw1-rmr-slide-stainless-threaded-barrel-black.html",
      "price": 389.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655135871_32224_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw1-rmr-slide-stainless-threaded-barrel-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW2 Extreme Carry Cut RMR Slide & Threaded Barrel, 2-Tone Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw2-extreme-carry-cut-rmr-slide-threaded-barrel-2-tone-flat-dark-earth.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655123178_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw2-extreme-carry-cut-rmr-slide-threaded-barrel-2-tone-flat-dark-earth.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW2 Extreme Carry Cut RMR Slide & Threaded Barrel, 2-Tone Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw2-extreme-carry-cut-rmr-slide-threaded-barrel-2-tone-sniper-green.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/7/a/7a4a7832.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw2-extreme-carry-cut-rmr-slide-threaded-barrel-2-tone-sniper-green.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW2 Extreme Carry Cut RMR Slide & Threaded Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw2-extreme-carry-cut-rmr-slide-threaded-barrel-black-dlc.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/7/a/7a4a7005.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw2-extreme-carry-cut-rmr-slide-threaded-barrel-black-dlc.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW2 Extreme Carry Cut RMR Slide & Threaded Barrel, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw2-extreme-carry-cut-rmr-slide-threaded-barrel-flat-dark-earth.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655128774_4.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw2-extreme-carry-cut-rmr-slide-threaded-barrel-flat-dark-earth.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW6 RMR Slide & Non-Threaded Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw6-rmr-slide-non-threaded-barrel-dlc-black.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg0151655142747_82223_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw6-rmr-slide-non-threaded-barrel-dlc-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW6 RMR Slide & Non-Threaded Barrel, FDE",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw6-rmr-slide-non-threaded-barrel-fde.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg0151655142749_82223_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw6-rmr-slide-non-threaded-barrel-fde.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW6 RMR Slide & Stainless Non-Threaded Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw6-rmr-slide-stainless-non-threaded-barrel-black.html",
      "price": 389.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655145936_112823_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw6-rmr-slide-stainless-non-threaded-barrel-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SW6 RMR Slide & Threaded Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-sw6-rmr-slide-threaded-barrel-dlc-black.html",
      "price": 389.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg0151655142748_82223_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-sw6-rmr-slide-threaded-barrel-dlc-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SWRV2 RMR Slide W/ Copper Threaded Barrel, Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-green-copper-threaded-barrel.html",
      "price": 389.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655140148_5724_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-green-copper-threaded-barrel.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "sniper_green",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SWRV2  RMR Slide & Threaded Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-threaded-barrel-dlc-black-rear-sight-rear.html",
      "price": 389.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655131023_32824_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-threaded-barrel-dlc-black-rear-sight-rear.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 4.9,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "dlc",
      "frame_color": "black",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SWRV2 RMR Slide & Threaded Barrel, FDE, 2-Tone (Rear Sight Rear)",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-threaded-barrel-fde-2-tone-rear-sight-rear.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655131076_32824_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-threaded-barrel-fde-2-tone-rear-sight-rear.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SWRV2 RMR Slide & Threaded Barrel, Green, 2-Tone",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-threaded-barrel-green-2-tone-rear-sight-rear.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655131077_32924_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-threaded-barrel-green-2-tone-rear-sight-rear.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SWRV2 RMR Slide & TiN Non-Threaded Barrel, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-tin-non-threaded-barrel-flat-dark-earth.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655130872_32824_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-tin-non-threaded-barrel-flat-dark-earth.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": "flat_dark_earth",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With SWRV2 RMR Slide & TiN Non-Threaded Barrel, Sniper Green (Rear Sight Rear)",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-tin-non-threaded-barrel-sniper-green-rear-sight-rear.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655130873_32924_1_1_.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-swr-rmr-slide-tin-non-threaded-barrel-sniper-green-rear-sight-rear.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "sniper_green",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With  X-1 RMR Long Slide, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-x-1-rmr-long-slide-black.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655187397_4225_1_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-x-1-rmr-long-slide-black.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": true,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm Pistol With X-1 RMR Long Slide, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-pistol-with-x-1-rmr-long-slide-flat-dark-earth.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655187398_4225_1_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-pistol-with-x-1-rmr-long-slide-flat-dark-earth.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": true,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm RMR Pistol w/ 10 PMAG 27rd/15rd Magazines & PSA Pistol Bag",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-rmr-pistol-w-10-pmag-27rd-15rd-magazines-psa-pistol-bag2.html",
      "price": 449.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655136745_1.jpeg",
      "image_file_name": "psa-dagger-compact-9mm-rmr-pistol-w-10-pmag-27rd-15rd-magazines-psa-pistol-bag2.jpg",
      "size": "compact",
      "width": 0,
      "length": 0,
      "height": 0,
      "barrel_length": 0,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": null,
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm RMR Pistol with Extreme Carry Cuts - Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-rmr-pistol-with-extreme-carry-cuts-flat-dark-earth.html",
      "price": 349.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655128744_4.jpg",
      "image_file_name": "psa-dagger-compact-9mm-rmr-pistol-with-extreme-carry-cuts-flat-dark-earth.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": "flat_dark_earth",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm RMR Pistol with Threaded Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-rmr-pistol-with-threaded-barrel-black-dlc.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655129121_2.jpeg",
      "image_file_name": "psa-dagger-compact-9mm-rmr-pistol-with-threaded-barrel-black-dlc.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm RMR Pistol With Threaded Barrel, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-rmr-pistol-with-threaded-barrel-flat-dark-earth.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655128743_3.jpg",
      "image_file_name": "psa-dagger-compact-9mm-rmr-pistol-with-threaded-barrel-flat-dark-earth.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": "flat_dark_earth",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Compact 9mm RMR Pistol With Threaded Barrel, Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-compact-9mm-rmr-pistol-with-threaded-barrel-sniper-green.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg0151655129980_032423_1_1.jpg",
      "image_file_name": "psa-dagger-compact-9mm-rmr-pistol-with-threaded-barrel-sniper-green.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.65,
      "height": 4.78,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "sniper_green",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Complete SW1 RMR Pistol W/ Gold Barrel & 10 15RD Mags, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-complete-sw1-rmr-pistol-w-gold-barrel-10-15rd-mags-black-dlc.html",
      "price": 469.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg0151655139887_052623_1.jpg",
      "image_file_name": "psa-dagger-complete-sw1-rmr-pistol-w-gold-barrel-10-15rd-mags-black-dlc.jpg",
      "size": "compact",
      "width": 0,
      "length": 0,
      "height": 0,
      "barrel_length": 0,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": null,
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 10,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Complete SW3 RMR Pistol W/Copper Spiral Fluted Non-Threaded Barrel, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-complete-sw3-rmr-slide-assembly-w-copper-spiral-fluted-non-threaded-barrel-flat-dark-earth.html",
      "price": 429.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg01-51655175124_10724_1.jpg",
      "image_file_name": "psa-dagger-complete-sw3-rmr-slide-assembly-w-copper-spiral-fluted-non-threaded-barrel-flat-dark-earth.jpg",
      "size": "compact",
      "width": 1.28,
      "length": 7.15,
      "height": 4.78,
      "barrel_length": 4,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Full Size S 9mm Pistol With C-1 RMR Compensated Slide, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-pistol-with-c-1-rmr-compensated-slide-black.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655185368_3625_1_1_.jpg",
      "image_file_name": "psa-dagger-full-size-s-9mm-pistol-with-c-1-rmr-compensated-slide-black.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size S 9mm Pistol With C-1 RMR Compensated Slide, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-pistol-with-c-1-rmr-compensated-slide-flat-dark-earth.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655185369_3625_1_1_.jpg",
      "image_file_name": "psa-dagger-full-size-s-9mm-pistol-with-c-1-rmr-compensated-slide-flat-dark-earth.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm Pistol With Extreme Carry Cut & Non-Threaded Barrel, Two-Tone Flat Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-pistol-with-extreme-carry-cut-non-threaded-barrel-two-tone-flat-sniper-green-v2.html",
      "price": 309.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/5/1/51655130372_1.jpg",
      "image_file_name": "psa-dagger-full-size-s-9mm-pistol-with-extreme-carry-cut-non-threaded-barrel-two-tone-flat-sniper-green-v2.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black_dlc_coating",
      "slide_coating": "dlc",
      "frame_color": "sniper_green",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm Pistol With Extreme Carry Cut RMR Slide & Threaded Barrel, Two-Tone Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-pistol-with-extreme-carry-cut-rmr-slide-threaded-barrel-two-tone-sniper-green.html",
      "price": 369.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/5/1/51655130273_1.jpg",
      "image_file_name": "psa-dagger-full-size-s-9mm-pistol-with-extreme-carry-cut-rmr-slide-threaded-barrel-two-tone-sniper-green.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm Pistol with SW1 RMR with Threaded Barrel & 10 17rd Mags & Bag, FDE (Rear Sight Rear)",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-pistol-with-sw1-rmr-with-threaded-barrel-ameriglo-lower-1-3-co-witness-10-17rd-mags-bag-fde-rear-sight-rear.html",
      "price": 479.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/5/1/51655132791_1_1.jpg",
      "image_file_name": "psa-dagger-full-size-s-9mm-pistol-with-sw1-rmr-with-threaded-barrel-ameriglo-lower-1-3-co-witness-10-17rd-mags-bag-fde-rear-sight-rear.jpg",
      "size": "full_size_s",
      "width": 0,
      "length": 0,
      "height": 0,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": null,
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 10,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm Pistol With SWRV2 RMR Slide & TiN Non-Threaded Barrel, Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-pistol-with-swr-rmr-slide-tin-non-threaded-barrel-sniper-green.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655130875_41924_1_1_.jpg",
      "image_file_name": "psa-dagger-full-size-s-9mm-pistol-with-swr-rmr-slide-tin-non-threaded-barrel-sniper-green.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.65,
      "height": 5.38,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "sniper_green",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm Pistol With SWR RMR Slide W/Gold Barrel, Sniper Green With 10-17rd PMAGS & PSA Pistol Bag",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-pistol-with-swr-rmr-slide-w-gold-barrel-sniper-green-with-10-17rd-pmags-psa-pistol-bag.html",
      "price": 469.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/s/c/screenshot_2023-06-21_at_1.45.16_pm_1.png",
      "image_file_name": "psa-dagger-full-size-s-9mm-pistol-with-swr-rmr-slide-w-gold-barrel-sniper-green-with-10-17rd-pmags-psa-pistol-bag.jpg",
      "size": "full_size_s",
      "width": 0,
      "length": 0,
      "height": 0,
      "barrel_length": 0,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": null,
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm SW1 RMR Pistol With Threaded Barrel, Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-sw1-rmr-pistol-with-threaded-barrel-1-3-lower-sights.html",
      "price": 369.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/5/1/51655130985_1.jpg",
      "image_file_name": "psa-dagger-full-size-s-9mm-sw1-rmr-pistol-with-threaded-barrel-1-3-lower-sights.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.65,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "sniper_green",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm SW2 RMR Pistol, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-sw2-rmr-pistol-black.html",
      "price": 369.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg0251655139253_8423_1.jpg",
      "image_file_name": "psa-dagger-full-size-s-9mm-sw2-rmr-pistol-black.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.65,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "dlc",
      "frame_color": "black",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm SW2 RMR Pistol W/ Chameleon Threaded Barrel, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-sw2-rmr-pistol-w-chameleon-threaded-barrel-black.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg0251655139258_8423_1.jpg",
      "image_file_name": "psa-dagger-full-size-s-9mm-sw2-rmr-pistol-w-chameleon-threaded-barrel-black.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.65,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "dlc",
      "frame_color": "black",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm SW3 RMR Pistol With Stainless Non-Threaded Barrel  With10 -17rd Magazines and Bag, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-sw3-rmr-pistol-with-stainless-non-threaded-barrel-lower-1-3-day-sights-with10-17rd-magazines-and-bag-black.html",
      "price": 469.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg0251655137031_041723_1.jpg",
      "image_file_name": "psa-dagger-full-size-s-9mm-sw3-rmr-pistol-with-stainless-non-threaded-barrel-lower-1-3-day-sights-with10-17rd-magazines-and-bag-black.jpg",
      "size": "full_size_s",
      "width": 0,
      "length": 0,
      "height": 0,
      "barrel_length": 0,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": null,
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 10,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm Pistol With SWRV2 RMR & Gold Barrel, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-s-9mm-swr-rmr-pistol-with-gold-barrel-flat-dark-earth.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655130874_41924_1_1_.jpg",
      "image_file_name": "psa-dagger-full-size-s-9mm-swr-rmr-pistol-with-gold-barrel-flat-dark-earth.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.65,
      "height": 5.38,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": "flat_dark_earth",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size S 9mm Pistol With Compact X-1 RMR Long Slide, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-sx-pistol-with-rmr-extreme-carry-cut-long-slide-lower-1-3-day-sight-long-non-threaded-barrel-flat-dark-earth.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/5/1/51655131120_1.jpg",
      "image_file_name": "psa-dagger-full-size-sx-pistol-with-rmr-extreme-carry-cut-long-slide-lower-1-3-day-sight-long-non-threaded-barrel-flat-dark-earth.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": true,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": "flat_dark_earth",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Full Size S 9mm Pistol With Compact X-1 RMR Long Slide, Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-full-size-sx-pistol-with-rmr-extreme-carry-cut-long-slide-lower-1-3-day-sight-long-non-threaded-barrel-sniper-green.html",
      "price": 379.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/5/1/51655131121_1.jpg",
      "image_file_name": "psa-dagger-full-size-sx-pistol-with-rmr-extreme-carry-cut-long-slide-lower-1-3-day-sight-long-non-threaded-barrel-sniper-green.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": true,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "sniper_green",
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol - Shield Cut With 5 15rd Mags & Bag, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-9mm-pistol-shield-cut-5-15rd-mags-bag-black.html",
      "price": 479.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655180824.png",
      "image_file_name": "psa-dagger-micro-9mm-pistol-shield-cut-5-15rd-mags-bag-black.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 5,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol - Shield Cut, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-9mm-pistol-shield-cut-black-dlc.html",
      "price": 339.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655136024_1.jpg",
      "image_file_name": "psa-dagger-micro-9mm-pistol-shield-cut-black-dlc.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol - Shield Cut, FDE Slide, 2-Tone",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-9mm-pistol-shield-cut-fde-slide-2-tone.html",
      "price": 339.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655146998_121123_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-9mm-pistol-shield-cut-fde-slide-2-tone.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol - Shield Cut, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-9mm-pistol-shield-cut-flat-dark-earth.html",
      "price": 339.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655150888_3524_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-9mm-pistol-shield-cut-flat-dark-earth.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": "flat_dark_earth",
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol - Shield Cut, Sniper Green Slide, 2-Tone",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-9mm-pistol-shield-cut-sniper-green-slide-2-tone.html",
      "price": 339.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655146999_121123_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-9mm-pistol-shield-cut-sniper-green-slide-2-tone.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol - Shield Cut, Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-9mm-pistol-shield-cut-sniper-green2.html",
      "price": 339.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655150909_3524_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-9mm-pistol-shield-cut-sniper-green2.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "sniper_green",
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol - Shield Cut w/ Holosun 407k, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-9mm-pistol-shield-cut-w-holosun-407k-black-dlc.html",
      "price": 539.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655136037_1.jpg",
      "image_file_name": "psa-dagger-micro-9mm-pistol-shield-cut-w-holosun-407k-black-dlc.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol - Shield Cut W/Holosun 407k, FDE Slide, 2-Tone",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-9mm-pistol-shield-cut-w-holosun-407k-fde-slide-2-tone.html",
      "price": 539.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655147002_121123_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-9mm-pistol-shield-cut-w-holosun-407k-fde-slide-2-tone.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol - Shield Cut W/ Holosun 407K, Sniper Green Slide, 2-Tone",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-9mm-pistol-shield-cut-w-holosun-407k-sniper-green-slide-2-tone.html",
      "price": 539.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655147003_121123_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-9mm-pistol-shield-cut-w-holosun-407k-sniper-green-slide-2-tone.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol - Shield Cut With Night Sights, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-9mm-pistol-shield-cut-with-night-sights-flat-dark-earth.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655188413_42525_1.jpg",
      "image_file_name": "psa-dagger-micro-9mm-pistol-shield-cut-with-night-sights-flat-dark-earth.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": true,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro 9mm Pistol With Threaded Barrel - Shield Cut, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-9mm-pistol-with-threaded-barrel-shield-cut-black.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655159766_103124_1_2_.jpg",
      "image_file_name": "psa-dagger-micro-9mm-pistol-with-threaded-barrel-shield-cut-black.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 0,
      "height": 4.7,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro C-1 9mm Pistol - Shield Cut, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-c-1-9mm-pistol-shield-cut-black.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655145577_12723_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-c-1-9mm-pistol-shield-cut-black.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.1,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "black",
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro C-1 9mm Pistol - Shield Cut, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-c-1-9mm-pistol-shield-cut-flat-dark-earth.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655150889_3524_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-c-1-9mm-pistol-shield-cut-flat-dark-earth.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.1,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": "flat_dark_earth",
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro C-1 9mm Pistol - Shield Cut, Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-c-1-9mm-pistol-shield-cut-sniper-green.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655150910_3524_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-c-1-9mm-pistol-shield-cut-sniper-green.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.1,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "sniper_green",
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro C-1 9mm Pistol - Shield Cut, W/Holosun 407k, Black",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-c-1-9mm-pistol-shield-cut-w-holosun-407k-black.html",
      "price": 559.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655145582_12723_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-c-1-9mm-pistol-shield-cut-w-holosun-407k-black.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.1,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "black",
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro C-1 9mm Pistol - Shield Cut, Sniper Green Slide, 2-Tone",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-c-1-complete-9mm-pistol-shield-cut-sniper-green-slide-2-tone.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655145572_101023_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-c-1-complete-9mm-pistol-shield-cut-sniper-green-slide-2-tone.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.1,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "sniper_green",
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro C-1 9mm Pistol - Shield Cut, W/Holosun 407k, FDE Slide, 2-Tone",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-c-1-complete-9mm-pistol-shield-cut-w-holosun-407k-fde-slide-2-tone.html",
      "price": 559.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655145580_101023_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-c-1-complete-9mm-pistol-shield-cut-w-holosun-407k-fde-slide-2-tone.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.1,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "flat_dark_earth",
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro C-1 9mm Pistol - Shield Cut, W/Holosun 407k, Sniper Green Slide, 2-Tone",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-c-1-complete-9mm-pistol-shield-cut-w-holosun-407k-sniper-green-slide-2-tone.html",
      "price": 559.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655145581_101023_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-c-1-complete-9mm-pistol-shield-cut-w-holosun-407k-sniper-green-slide-2-tone.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.1,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "sniper_green",
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro C-1 9mm Pistol - Shield Cut, FDE Slide, 2-Tone",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-complete-9mm-pistol-mc-1-fde-slide-2-tone.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655143765_91123_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-complete-9mm-pistol-mc-1-fde-slide-2-tone.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.1,
      "height": 4.7,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": true,
      "slide_color": "flat_dark_earth",
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro X-1 9mm Pistol - Shield Cut, Non-Threaded Barrel, Sniper Green Slide, 2-Tone",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-x-1-9mm-pistol-shield-cut-non-threaded-barrel-sniper-green-slide-2-tone.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655148591_11024_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-x-1-9mm-pistol-shield-cut-non-threaded-barrel-sniper-green-slide-2-tone.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.2,
      "height": 4.7,
      "barrel_length": 4.15,
      "longer_barrel": true,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro X-1 9mm Pistol - Shield Cut, Non Threaded Barrel, Sniper Green",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-x-1-9mm-pistol-shield-cut-non-threaded-barrel-sniper-green2.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655150911_3524_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-x-1-9mm-pistol-shield-cut-non-threaded-barrel-sniper-green2.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.2,
      "height": 4.7,
      "barrel_length": 4.15,
      "longer_barrel": true,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "sniper_green",
      "slide_coating": "cerakote",
      "frame_color": "sniper_green",
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro X-1 9mm Pistol - Shield Cut, Non-Threaded Barrel, FDE Slide, 2-Tone",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-x-1-complete-9mm-pistol-non-threaded-barrel-fde-slide-2-tone.html",
      "price": 359.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655145550_092923_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-x-1-complete-9mm-pistol-non-threaded-barrel-fde-slide-2-tone.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.2,
      "height": 4.7,
      "barrel_length": 4.15,
      "longer_barrel": true,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Micro X-1 9mm Pistol - Shield Cut, Non-Threaded Barrel W/Holosun 407k, Two Tone, FDE Slide",
      "psa_url": "https://palmettostatearmory.com/psa-dagger-micro-x-1-complete-9mm-pistol-shield-cut-non-threaded-barrel-w-holosun-407k-two-tone-fde-slide.html",
      "price": 559.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm01-51655145558_092923_1_1_.jpg",
      "image_file_name": "psa-dagger-micro-x-1-complete-9mm-pistol-shield-cut-non-threaded-barrel-w-holosun-407k-two-tone-fde-slide.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 7.2,
      "height": 4.7,
      "barrel_length": 4.15,
      "longer_barrel": true,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "flat_dark_earth",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "shield_rmsc",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Dagger Full Size - S 9mm ECC RMR Threaded Barrel Pistol With 10 17rd Magazines & Pistol Case, Flat Dark Earth",
      "psa_url": "https://palmettostatearmory.com/psa-full-size-s-9mm-ecc-rmr-threaded-barrel-lower-1-3-day-sights-pistol-with-10-17rd-magazines-pistol-case-flat-dark-earth.html",
      "price": 459.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg0251655136904_041323_1_1.jpg",
      "image_file_name": "psa-full-size-s-9mm-ecc-rmr-threaded-barrel-lower-1-3-day-sights-pistol-with-10-17rd-magazines-pistol-case-flat-dark-earth.jpg",
      "size": "full_size_s",
      "width": 0,
      "length": 0,
      "height": 0,
      "barrel_length": 0,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": null,
      "slide_coating": "none",
      "frame_color": null,
      "optic_compatibility": "rmr",
      "has_cover_plate": true,
      "mag_bag_bonus": true,
      "number_of_included_mags": 10,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Full Size - S 9mm Pistol, Spiral Fluted Barrel, W/Mag Extensions, M81 Woodland Camo",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-full-size-s-9mm-pistol-fluted-barrel-w-mag-extensions-m81-woodland-camo.html",
      "price": 629.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655152390_42224_1_1_.jpg",
      "image_file_name": "psa-sabre-dagger-full-size-s-9mm-pistol-fluted-barrel-w-mag-extensions-m81-woodland-camo.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "m81_woodland_camo",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 2,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Full Size - S 9mm Pistol, Ported Barrel, W/Mag Extensions, M81 Woodland Camo",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-full-size-s-9mm-pistol-ported-barrel-w-mag-extensions-m81-woodland-camo.html",
      "price": 629.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655191679_7325_6.jpg",
      "image_file_name": "psa-sabre-dagger-full-size-s-9mm-pistol-ported-barrel-w-mag-extensions-m81-woodland-camo.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "m81_woodland_camo",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 2,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Full Size - S 9mm Pistol, Spiral Fluted Barrel, W/Mag Extensions, Black",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-full-size-s-9mm-pistol-spiral-fluted-barrel-w-mag-extensions-black.html",
      "price": 599.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655152373_42224_1_1_.jpg",
      "image_file_name": "psa-sabre-dagger-full-size-s-9mm-pistol-spiral-fluted-barrel-w-mag-extensions-black.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 2,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Full Size - S 9mm Pistol, Threaded Barrel, W/Mag Extensions, Black",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-full-size-s-9mm-pistol-threaded-barrel-w-mag-extensions-black.html",
      "price": 599.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655152113_081224_1.jpg",
      "image_file_name": "psa-sabre-dagger-full-size-s-9mm-pistol-threaded-barrel-w-mag-extensions-black.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.65,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 2,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Full Size - S 9mm Pistol, Threaded Barrel, W/Mag extensions, M81 Woodland Camo",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-full-size-s-9mm-pistol-threaded-barrel-w-mag-extensions-m81-woodland-camo.html",
      "price": 629.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655152121_081224_1.jpg",
      "image_file_name": "psa-sabre-dagger-full-size-s-9mm-pistol-threaded-barrel-w-mag-extensions-m81-woodland-camo.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.65,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "m81_woodland_camo",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 2,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Full Size - S 9mm Pistol, TiN Spiral Fluted Barrel, W/Mag Extensions, Black",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-full-size-s-9mm-pistol-tin-fluted-barrel-w-mag-extensions-black.html",
      "price": 599.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655152374_42224_1_1_.jpg",
      "image_file_name": "psa-sabre-dagger-full-size-s-9mm-pistol-tin-fluted-barrel-w-mag-extensions-black.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 2,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Full Size - S 9mm Pistol, TiN Spiral Fluted Barrel, W/Mag Extensions, M81 Desert Camo",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-full-size-s-9mm-pistol-tin-fluted-barrel-w-mag-extensions-m81-desert-camo.html",
      "price": 629.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655152389_42224_1_1_.jpg",
      "image_file_name": "psa-sabre-dagger-full-size-s-9mm-pistol-tin-fluted-barrel-w-mag-extensions-m81-desert-camo.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 3.9,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "m81_desert_camo",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 2,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Full Size - S 9mm Pistol, TiN Ported Barrel, W/Mag Extensions, Black",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-full-size-s-9mm-pistol-tin-ported-barrel-w-mag-extensions-black.html",
      "price": 599.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655191653_7325_6.jpg",
      "image_file_name": "psa-sabre-dagger-full-size-s-9mm-pistol-tin-ported-barrel-w-mag-extensions-black.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 4,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 2,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Full Size - S 9mm Pistol, TiN Ported Barrel, W/Mag Extensions, M81 Desert Camo",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-full-size-s-9mm-pistol-tin-ported-barrel-w-mag-extensions-m81-desert-camo.html",
      "price": 629.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655191652_7325_6.jpg",
      "image_file_name": "psa-sabre-dagger-full-size-s-9mm-pistol-tin-ported-barrel-w-mag-extensions-m81-desert-camo.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.15,
      "height": 5.38,
      "barrel_length": 4,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "m81_desert_camo",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 2,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Full Size - S 9mm Pistol, TiN-Threaded Barrel, W/Mag extensions, Black",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-full-size-s-9mm-pistol-tin-threaded-barrel-w-mag-extensions-black.html",
      "price": 599.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655152119_81224_1.jpg",
      "image_file_name": "psa-sabre-dagger-full-size-s-9mm-pistol-tin-threaded-barrel-w-mag-extensions-black.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.65,
      "height": 5.38,
      "barrel_length": 4,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "black",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 2,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Full Size - S 9mm Pistol, Tin-Threaded Barrel, W/Mag Extensions, M81 Desert Camo",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-full-size-s-9mm-pistol-tin-threaded-barrel-w-mag-extensions-m81-desert-camo.html",
      "price": 629.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/g/dg02-51655152120_81224_1.jpg",
      "image_file_name": "psa-sabre-dagger-full-size-s-9mm-pistol-tin-threaded-barrel-w-mag-extensions-m81-desert-camo.jpg",
      "size": "full_size_s",
      "width": 1.28,
      "length": 7.65,
      "height": 5.38,
      "barrel_length": 4.5,
      "longer_barrel": false,
      "threaded_barrel": true,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "m81_desert_camo",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": true,
      "number_of_included_mags": 2,
      "mag_size": 17
    },
    {
      "psa_product_name": "PSA Sabre Dagger Micro 9mm Pistol, TiN Barrel w/ Mag Extensions, Black",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-micro-9mm-pistol-tin-barrel-w-mag-extensions-black.html",
      "price": 599.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm02-51655197977_92625_1.jpg",
      "image_file_name": "psa-sabre-dagger-micro-9mm-pistol-tin-barrel-w-mag-extensions-black.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.9,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Sabre Dagger Micro 9mm Pistol, TiN Barrel, w/ Mag Extensions, M81 Desert Camo",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-micro-9mm-pistol-tin-barrel-w-mag-extensions-m81-desert-camo.html",
      "price": 629.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm02-51655197979_92625_1.jpg",
      "image_file_name": "psa-sabre-dagger-micro-9mm-pistol-tin-barrel-w-mag-extensions-m81-desert-camo.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.9,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "m81_desert",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Sabre Dagger Micro 9mm Pistol, TiN Barrel, w/ Mag Extensions, M81 Woodland Camo",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-micro-9mm-pistol-tin-barrel-w-mag-extensions-m81-woodland-camo.html",
      "price": 629.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm02-51655197978_92625_1.jpg",
      "image_file_name": "psa-sabre-dagger-micro-9mm-pistol-tin-barrel-w-mag-extensions-m81-woodland-camo.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.9,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "m81_woodland",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Sabre Dagger Micro 9mm Pistol, w/ Mag Extensions, Black",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-micro-9mm-pistol-w-mag-extensions-black.html",
      "price": 599.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm02-51655197960_92625_1.jpg",
      "image_file_name": "psa-sabre-dagger-micro-9mm-pistol-w-mag-extensions-black.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.9,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": null,
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Sabre Dagger Micro 9mm Pistol, w/ Mag Extensions, M81 Desert Camo",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-micro-9mm-pistol-w-mag-extensions-m81-desert-camo.html",
      "price": 629.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm02-51655197976_92625_1.jpg",
      "image_file_name": "psa-sabre-dagger-micro-9mm-pistol-w-mag-extensions-m81-desert-camo.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.9,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "m81_desert",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    },
    {
      "psa_product_name": "PSA Sabre Dagger Micro 9mm Pistol, w/ Mag Extensions, M81 Woodland Camo",
      "psa_url": "https://palmettostatearmory.com/psa-sabre-dagger-micro-9mm-pistol-w-mag-extensions-m81-woodland-camo.html",
      "price": 629.99,
      "original_product_image_url": "https://palmettostatearmory.com/media/catalog/product/cache/7af8331bf1196ca28793bd1e8f6ecc7b/d/m/dm02-51655197975_92625_1.jpg",
      "image_file_name": "psa-sabre-dagger-micro-9mm-pistol-w-mag-extensions-m81-woodland-camo.jpg",
      "size": "micro",
      "width": 1.1,
      "length": 6.5,
      "height": 4.9,
      "barrel_length": 3.41,
      "longer_barrel": false,
      "threaded_barrel": false,
      "night_sight": false,
      "compensated_slide": false,
      "slide_color": "black",
      "slide_coating": "cerakote",
      "frame_color": "m81_woodland",
      "optic_compatibility": "none",
      "has_cover_plate": false,
      "mag_bag_bonus": false,
      "number_of_included_mags": 1,
      "mag_size": 15
    }
  ],
  "slide_colors": {
    "sniper_green": "Sniper Green",
    "black": "Black",
    "flat_dark_earth": "Flat Dark Earth",
    "black_dlc_coating": "Black DLC Coating"
  },
  "frame_colors": {
    "black": "Black",
    "sniper_green": "Sniper Green",
    "flat_dark_earth": "Flat Dark Earth",
    "m81_woodland_camo": "M81 Woodland Camo",
    "m81_desert_camo": "M81 Desert Camo",
    "m81_desert": "M81 Desert",
    "m81_woodland": "M81 Woodland"
  }
};
var daggers_data_default = data;

// client/querystring_options.ts
var ANY = "any";
var SIZES = ["micro", "compact", "full_size_s"];
var default_values = {
  size: "compact",
  longer_barrel: ANY,
  threaded_barrel: ANY,
  night_sight: ANY,
  optic_compatibility: ANY,
  has_cover_plate: ANY
};
var FILTER_PARAM_KEYS = Object.keys(default_values);

// lib/array.ts
var for_each = (arr, fn) => {
  let i = 0, len = arr.length;
  for (; i < len; i++) {
    fn(arr[i], i);
  }
};
var filter = (arr, predicate) => {
  const length = arr.length, res = [];
  for (let i = 0; i < length; i++) {
    if (predicate(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
};
var map = (arr, mapper) => {
  const length = arr.length, res = new Array(length);
  for (let i = 0; i < length; ++i) {
    res[i] = mapper(arr[i], i);
  }
  return res;
};

// client/filter-daggers.ts
var boolean_to_string = (value) => {
  return value ? "true" : "false";
};
var matches_boolean_filter = (product_value, filter_value) => {
  return filter_value === ANY || boolean_to_string(product_value) === filter_value;
};
var product_matches = (product, filters) => {
  return product.size === filters.size && matches_boolean_filter(product.longer_barrel, filters.longer_barrel) && matches_boolean_filter(product.threaded_barrel, filters.threaded_barrel) && matches_boolean_filter(product.night_sight, filters.night_sight) && (filters.optic_compatibility === ANY || product.optic_compatibility === filters.optic_compatibility) && matches_boolean_filter(product.has_cover_plate, filters.has_cover_plate);
};
var filter_daggers = (daggers, filters) => filter(daggers, (product) => product_matches(product, filters));

// client/count_possible_options.ts
var calculate_possible_filter_param_values = (products, sizes, keys) => {
  const size_to_filter_param_values = /* @__PURE__ */ new Map();
  for_each(sizes, (size) => {
    size_to_filter_param_values.set(size, /* @__PURE__ */ new Map());
  });
  for_each(products, (product) => {
    const key_map = size_to_filter_param_values.get(product.size);
    assert_default(key_map);
    for_each(keys, (key2) => {
      if (product[key2] === null) {
        return;
      }
      if (!key_map.has(key2)) {
        key_map.set(key2, /* @__PURE__ */ new Set());
      }
      const filter_set = key_map.get(key2);
      assert_default(filter_set);
      filter_set.add(product[key2]);
    });
  });
  return size_to_filter_param_values;
};
var calculate_displayed_filter_options_per_pistol_size = (products, sizes, keys) => {
  const size_to_filter_param_values = calculate_possible_filter_param_values(products, sizes, keys);
  const output = /* @__PURE__ */ new Map();
  for_each(sizes, (size) => {
    const key_map = size_to_filter_param_values.get(size);
    assert_default(key_map);
    const displayed_keys = /* @__PURE__ */ new Set();
    for_each(keys, (key2) => {
      const filter_set = key_map.get(key2);
      assert_default(filter_set);
      if (filter_set.size >= 2) {
        displayed_keys.add(key2);
      }
    });
    output.set(size, displayed_keys);
  });
  return (size) => {
    const displayed_keys = output.get(size);
    assert_default(displayed_keys);
    return displayed_keys;
  };
};

// lib/object.ts
var object_keys2 = (obj) => Object.keys(obj);
var object_entries = (obj) => Object.entries(obj);
var object_from_entries = (entries) => (
  // @ts-expect-error Object.entries is dumb and always returns string instead of the type of the key
  Object.fromEntries(entries)
);

// client/determine_if_alternate_filter_options_are_safe_to_click.ts
var possible_filter_option_values_excluding_any = {
  longer_barrel: ["true", "false"],
  threaded_barrel: ["true", "false"],
  night_sight: ["true", "false"],
  optic_compatibility: ["none", "rmr", "shield_rmsc"],
  has_cover_plate: ["true", "false"]
};
var calculate_alternate_option_selections_we_need_to_consider = (displayed_filter_options, current_filter_params) => object_from_entries(map(
  object_entries(possible_filter_option_values_excluding_any),
  ([key2, values]) => [key2, filter(values, (value) => displayed_filter_options.has(key2) && value !== current_filter_params[key2])]
));
var calculate_are_all_these_alternative_options_safe_to_click = (products, alternate_selections, current_filter_params) => {
  const pre_computed_possible_filter_params = object_from_entries(map(object_entries(alternate_selections), ([key2, values]) => {
    assert_default(Array.isArray(values));
    return [key2, map(values, (value) => {
      return {
        value,
        filter_params: {
          ...current_filter_params,
          [key2]: value
        }
      };
    })];
  }));
  const param_key_to_set_of_safe_value_selections = /* @__PURE__ */ new Map();
  for_each(object_keys2(alternate_selections), (key2) => {
    param_key_to_set_of_safe_value_selections.set(key2, /* @__PURE__ */ new Set());
  });
  for_each(products, (product) => {
    for_each(object_keys2(alternate_selections), (key2) => {
      for_each(pre_computed_possible_filter_params[key2], (possible_filter_params) => {
        if (product_matches(product, possible_filter_params.filter_params)) {
          param_key_to_set_of_safe_value_selections.get(key2)?.add(possible_filter_params.value);
        }
      });
    });
  });
  return (key2, value) => param_key_to_set_of_safe_value_selections.get(key2)?.has(value) ?? false;
};

// client/index.svelte
var root_62 = from_html(`<div class="no-results svelte-15huzto">No results for these filter options</div>`);
var root_7 = from_html(`<a target="_blank" rel="noopener" class="product-card svelte-15huzto"><h3 class="svelte-15huzto"> </h3> <img class="svelte-15huzto"/> <div class="price svelte-15huzto"> </div></a>`);
var root5 = from_html(`<div class="container svelte-15huzto"><div class="intro svelte-15huzto"><h1 style="color: var(--light_color)">Buy a <abbr title="Palmetto State Armory">PSA</abbr> Dagger</h1> <details class="svelte-15huzto"><summary class="svelte-15huzto">Why?</summary> <div class="svelte-15huzto"><p>The Palmetto State Armory Dagger is based on the Glock 19, and <a href="https://palmettostatearmory.com/psa-dagger.html" rel="noopener" target="_blank" class="svelte-15huzto">is generally parts-compatible with the Glock 19 Gen 3</a>.
					Palmetto State Armory sells reliable gun parts at pretty amazing prices.</p> <p>These pistols work with Glock 17 and 19 magazines, and might work in Glock holsters, though it's safer to use ones that are designed for the Dagger.
					The Micro is about the size of a Glock 43x, the Compact is about the size of a Glock 19, and the Full Size is about the size of a Glock 43.</p></div></details> <div class="card intro-pistol-size-selector svelte-15huzto"><!></div></div> <div class="filters-and-results svelte-15huzto"><div class="filters card svelte-15huzto"><h2 style="color: var(--dark_color); border-bottom: 1px solid var(--dark_color); padding-bottom: 8px;" class="svelte-15huzto">Filters</h2> <div class="filters-pistol-size-selector svelte-15huzto"><!></div> <!> <!> <!> <!> <!></div> <div class="products-grid card svelte-15huzto"><!> <!></div></div></div>`);
function Client($$anchor, $$props) {
  push($$props, true);
  const querystring_instance = create_querystring_store(default_values);
  const get_displayed_filter_options_for_size = calculate_displayed_filter_options_per_pistol_size(daggers_data_default.daggers, SIZES, FILTER_PARAM_KEYS);
  const remove_has_cover_plate_if_optic_compatibility_is_none = (displayed_filter_options2, current_optic_compatibility) => {
    const new_set = new Set(displayed_filter_options2);
    if (current_optic_compatibility === "none") {
      new_set.delete("has_cover_plate");
    }
    return new_set;
  };
  const displayed_filter_options = user_derived(() => remove_has_cover_plate_if_optic_compatibility_is_none(get_displayed_filter_options_for_size(querystring_instance.params_with_defaults.size), querystring_instance.params_with_defaults.optic_compatibility));
  const ignore_filter_options_that_are_not_displayed = (displayed_filter_options2, current_filter_params) => {
    return {
      ...default_values,
      ...object_from_entries(filter(object_entries(current_filter_params), ([key2]) => key2 === "size" || displayed_filter_options2.has(key2)))
    };
  };
  const filtered_daggers = user_derived(() => filter_daggers(daggers_data_default.daggers, ignore_filter_options_that_are_not_displayed(get(displayed_filter_options), querystring_instance.params_with_defaults)).sort((a, b) => a.price - b.price));
  const add_disabled_to_unsafe_options = (key2, options) => {
    return map(options, (option) => {
      return {
        ...option,
        disabled: !should_this_option_be_enabled(key2, option.value)
      };
    });
  };
  const alternate_option_selections_we_need_to_consider = user_derived(() => calculate_alternate_option_selections_we_need_to_consider(get(displayed_filter_options), querystring_instance.params_with_defaults));
  const is_this_alternate_option_safe_to_click = user_derived(() => calculate_are_all_these_alternative_options_safe_to_click(daggers_data_default.daggers, get(alternate_option_selections_we_need_to_consider), querystring_instance.params_with_defaults));
  const should_this_option_be_enabled = (key2, value) => value === ANY || querystring_instance.params_with_defaults[key2] === value || get(is_this_alternate_option_safe_to_click)(key2, value);
  var div = root5();
  var div_1 = child(div);
  var div_2 = sibling(child(div_1), 4);
  var node = child(div_2);
  PistolSizeSelector(node, {
    get get_altered_query_string() {
      return querystring_instance.get_altered_query_string;
    },
    get size() {
      return querystring_instance.params_with_defaults.size;
    },
    set size($$value) {
      querystring_instance.params_with_defaults.size = $$value;
    }
  });
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  var div_4 = child(div_3);
  var div_5 = sibling(child(div_4), 2);
  var node_1 = child(div_5);
  PistolSizeSelector(node_1, {
    get get_altered_query_string() {
      return querystring_instance.get_altered_query_string;
    },
    get size() {
      return querystring_instance.params_with_defaults.size;
    },
    set size($$value) {
      querystring_instance.params_with_defaults.size = $$value;
    }
  });
  reset(div_5);
  var node_2 = sibling(div_5, 2);
  {
    var consequent = ($$anchor2) => {
      {
        let $0 = user_derived(() => add_disabled_to_unsafe_options("longer_barrel", [
          { label: "Either", value: "any" },
          { label: "Yes", value: "true" },
          { label: "No", value: "false" }
        ]));
        FilterSelection($$anchor2, {
          title: "Longer Barrel",
          description: "Adds about half an inch to the barrel. Makes it easier to hit what you're aiming at",
          group_name: "longer_barrel",
          get options() {
            return get($0);
          },
          get get_altered_query_string() {
            return querystring_instance.get_altered_query_string;
          },
          get selected_value() {
            return querystring_instance.params_with_defaults.longer_barrel;
          },
          set selected_value($$value) {
            querystring_instance.params_with_defaults.longer_barrel = $$value;
          }
        });
      }
    };
    if_block(node_2, ($$render) => {
      if (get(displayed_filter_options).has("longer_barrel")) $$render(consequent);
    });
  }
  var node_3 = sibling(node_2, 2);
  {
    var consequent_1 = ($$anchor2) => {
      {
        let $0 = user_derived(() => add_disabled_to_unsafe_options("threaded_barrel", [
          { label: "Either", value: "any" },
          { label: "Yes", value: "true" },
          { label: "No", value: "false" }
        ]));
        FilterSelection($$anchor2, {
          title: "Threaded Barrel",
          description: "If you want to be able to stick a suppressor or flash hider or something on your gun",
          group_name: "threaded_barrel",
          get options() {
            return get($0);
          },
          get get_altered_query_string() {
            return querystring_instance.get_altered_query_string;
          },
          get selected_value() {
            return querystring_instance.params_with_defaults.threaded_barrel;
          },
          set selected_value($$value) {
            querystring_instance.params_with_defaults.threaded_barrel = $$value;
          }
        });
      }
    };
    if_block(node_3, ($$render) => {
      if (get(displayed_filter_options).has("threaded_barrel")) $$render(consequent_1);
    });
  }
  var node_4 = sibling(node_3, 2);
  {
    var consequent_2 = ($$anchor2) => {
      {
        let $0 = user_derived(() => add_disabled_to_unsafe_options("night_sight", [
          { label: "Either", value: "any" },
          { label: "Yes", value: "true" },
          { label: "No", value: "false" }
        ]));
        FilterSelection($$anchor2, {
          title: "Night Sight",
          description: "The sights glow in the dark",
          group_name: "night_sight",
          get options() {
            return get($0);
          },
          get get_altered_query_string() {
            return querystring_instance.get_altered_query_string;
          },
          get selected_value() {
            return querystring_instance.params_with_defaults.night_sight;
          },
          set selected_value($$value) {
            querystring_instance.params_with_defaults.night_sight = $$value;
          }
        });
      }
    };
    if_block(node_4, ($$render) => {
      if (get(displayed_filter_options).has("night_sight")) $$render(consequent_2);
    });
  }
  var node_5 = sibling(node_4, 2);
  {
    var consequent_3 = ($$anchor2) => {
      {
        let $0 = user_derived(() => add_disabled_to_unsafe_options("optic_compatibility", [
          { label: "Any", value: "any" },
          { label: "None", value: "none" },
          { label: "RMR", value: "rmr" },
          { label: "Shield RMSc", value: "shield_rmsc" }
        ]));
        FilterSelection($$anchor2, {
          title: "Optic Compatibility",
          description: "",
          group_name: "optic_compatibility",
          get options() {
            return get($0);
          },
          get get_altered_query_string() {
            return querystring_instance.get_altered_query_string;
          },
          get selected_value() {
            return querystring_instance.params_with_defaults.optic_compatibility;
          },
          set selected_value($$value) {
            querystring_instance.params_with_defaults.optic_compatibility = $$value;
          }
        });
      }
    };
    if_block(node_5, ($$render) => {
      if (get(displayed_filter_options).has("optic_compatibility")) $$render(consequent_3);
    });
  }
  var node_6 = sibling(node_5, 2);
  {
    var consequent_4 = ($$anchor2) => {
      {
        let $0 = user_derived(() => add_disabled_to_unsafe_options("has_cover_plate", [
          { label: "Either", value: "any" },
          { label: "Yes", value: "true" },
          { label: "No", value: "false" }
        ]));
        FilterSelection($$anchor2, {
          title: "Has Cover Plate",
          description: "If you're not going to put an optic on right away",
          group_name: "has_cover_plate",
          get options() {
            return get($0);
          },
          get get_altered_query_string() {
            return querystring_instance.get_altered_query_string;
          },
          get selected_value() {
            return querystring_instance.params_with_defaults.has_cover_plate;
          },
          set selected_value($$value) {
            querystring_instance.params_with_defaults.has_cover_plate = $$value;
          }
        });
      }
    };
    if_block(node_6, ($$render) => {
      if (get(displayed_filter_options).has("has_cover_plate")) $$render(consequent_4);
    });
  }
  reset(div_4);
  var div_6 = sibling(div_4, 2);
  var node_7 = child(div_6);
  {
    var consequent_5 = ($$anchor2) => {
      var div_7 = root_62();
      append($$anchor2, div_7);
    };
    if_block(node_7, ($$render) => {
      if (get(filtered_daggers).length === 0) $$render(consequent_5);
    });
  }
  var node_8 = sibling(node_7, 2);
  each(node_8, 17, () => get(filtered_daggers), index, ($$anchor2, product) => {
    var a_1 = root_7();
    var h3 = child(a_1);
    var text2 = child(h3, true);
    reset(h3);
    var img = sibling(h3, 2);
    var div_8 = sibling(img, 2);
    var text_1 = child(div_8);
    reset(div_8);
    reset(a_1);
    template_effect(
      ($0, $1) => {
        set_attribute2(a_1, "href", get(product).psa_url);
        set_text(text2, $0);
        set_attribute2(img, "src", `/images/${get(product).image_file_name ?? ""}`);
        set_attribute2(img, "alt", get(product).psa_product_name);
        set_text(text_1, `$${$1 ?? ""}`);
      },
      [
        () => generate_title_default(get(product), daggers_data_default, querystring_instance.params_with_defaults),
        () => get(product).price.toFixed(2)
      ]
    );
    append($$anchor2, a_1);
  });
  reset(div_6);
  reset(div_3);
  reset(div);
  append($$anchor, div);
  pop();
}

// client/index.ts
var app = mount(Client, {
  target: document.getElementById("app")
});
