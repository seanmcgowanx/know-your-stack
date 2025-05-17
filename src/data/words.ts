export type LanguageKey =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "React"
  | "TypeScript"
  | "NodeJS"
  | "Python"
  | "Ruby";

export type WordBank = {
  [key in LanguageKey]: string[];
};

export const words: WordBank = {
  HTML: [
    "title", "header", "footer", "section", "article", "aside", "label", "legend", "select", "option",
    "submit", "canvas", "figure", "iframe", "output", "action", "method", "target", "accept", "hidden",
    "margin", "border", "padding", "style", "script", "button", "content", "loading", "default", "checked",
    "main", "form"
  ],
  CSS: [
    "display", "justify", "align", "outline", "zindex", "opacity", "inherit", "initial", "revert", "unset",
    "columns", "filters", "rotate", "scales", "shrink", "static", "relative", "absolute", "fixed", "sticky",
    "enabled", "visited", "clamped", "gradient", "media", "breakpt", "aspect", "blender"
  ],
  JavaScript: [
    "string", "number", "boolean", "promise", "resolve", "reject", "await", "async", "return", "import",
    "export", "extends", "finally", "console", "cookies", "timeout", "interval", "callback", "closure",
    "declared", "binding", "methods", "arrays", "modules", "classes", "browser", "runtime", "scripts",
    "handler", "matcher", "typeof", "nan", "eval", "this", "new"
  ],
  React: [
    "render", "effect", "router", "states", "hooks", "useref", "usememo", "useeffect", "usestate", "reducer",
    "spinner", "error", "wrapper", "component", "virtual", "cleanup", "memoize", "children", "navigate",
    "params", "outlet", "nested", "strict", "immutable", "route", "lazy", "context", "clone"
  ],
  TypeScript: [
    "typing", "generic", "private", "public", "declare", "partial", "record", "mapped", "indexed", "exclude",
    "extract", "keyof", "literal", "compile", "casting", "combine", "define", "nonnull", "unique", "never",
    "enum", "tuple", "aliasing", "global"
  ],
  NodeJS: [
    "server", "stream", "buffer", "listen", "router", "routes", "cookie", "config", "crypto", "errors",
    "tokens", "parser", "signal", "stdout", "stderr", "stdin", "logger", "bundle", "client", "socket",
    "method", "watcher", "session", "secure", "dotenv", "process", "sqlite", "express", "request", "response",
    "network"
  ],
  Python: [
    "global", "lambda", "format", "append", "insert", "remove", "delete", "assert", "except", "class",
    "random", "pickle", "integer", "float", "keyword", "package", "decoder", "encoder", "pass", "yield",
    "with", "elif", "try", "define", "range", "length", "mapper", "filter", "reduce", "setters"
  ],
  Ruby: [
    "unless", "elsif", "blocks", "yields", "symbol", "require", "include", "mixin", "models", "views",
    "helper", "filter", "before", "rescue", "digest", "assets", "engine", "mailer", "script", "puts",
    "gets", "chomp", "begin", "retry", "alias", "super", "self", "extend", "reader", "writer"
  ]
};

  
  
  