export const AssertionLevel: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    Aggressive: number;
    None: number;
    Normal: number;
    VeryAggressive: number;
};
export const AssignmentDeclarationKind: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    ExportsProperty: number;
    ModuleExports: number;
    None: number;
    ObjectDefinePropertyExports: number;
    ObjectDefinePropertyValue: number;
    ObjectDefinePrototypeProperty: number;
    Property: number;
    Prototype: number;
    PrototypeProperty: number;
    ThisProperty: number;
};
export const AssignmentKind: {
    "0": string;
    "1": string;
    "2": string;
    Compound: number;
    Definite: number;
    None: number;
};
export const Associativity: {
    "0": string;
    "1": string;
    Left: number;
    Right: number;
};
export namespace BreakpointResolver {
    function spanInSourceFileAtLocation(sourceFile: any, position: any): any;
}
export const BuilderProgramKind: {
    "0": string;
    "1": string;
    EmitAndSemanticDiagnosticsBuilderProgram: number;
    SemanticDiagnosticsBuilderProgram: number;
};
export namespace BuilderState {
    function canReuseOldState(newReferencedMap: any, oldState: any): any;
    function clone(state: any): any;
    function create(newProgram: any, getCanonicalFileName: any, oldState: any): any;
    function getAllDependencies(state: any, programOfThisState: any, sourceFile: any): any;
    function getFilesAffectedBy(state: any, programOfThisState: any, path: any, cancellationToken: any, computeHash: any, cacheToUpdateSignature: any, exportedModulesMapCache: any): any;
    function releaseCache(state: any): void;
    function updateExportedFilesMapFromCache(state: any, exportedModulesMapCache: any): void;
    function updateSignaturesFromCache(state: any, signatureCache: any): void;
}
export const CharacterCodes: {
    $: number;
    "0": string;
    "10": string;
    "100": string;
    "101": string;
    "102": string;
    "103": string;
    "104": string;
    "105": string;
    "106": string;
    "107": string;
    "108": string;
    "109": string;
    "11": string;
    "110": string;
    "111": string;
    "112": string;
    "113": string;
    "114": string;
    "115": string;
    "116": string;
    "117": string;
    "118": string;
    "119": string;
    "12": string;
    "120": string;
    "121": string;
    "122": string;
    "12288": string;
    "123": string;
    "124": string;
    "125": string;
    "126": string;
    "127": string;
    "13": string;
    "133": string;
    "160": string;
    "32": string;
    "33": string;
    "34": string;
    "35": string;
    "36": string;
    "37": string;
    "38": string;
    "39": string;
    "40": string;
    "41": string;
    "42": string;
    "43": string;
    "44": string;
    "45": string;
    "46": string;
    "47": string;
    "48": string;
    "49": string;
    "50": string;
    "51": string;
    "52": string;
    "53": string;
    "54": string;
    "55": string;
    "56": string;
    "57": string;
    "5760": string;
    "58": string;
    "59": string;
    "60": string;
    "61": string;
    "62": string;
    "63": string;
    "64": string;
    "65": string;
    "65279": string;
    "66": string;
    "67": string;
    "68": string;
    "69": string;
    "70": string;
    "71": string;
    "72": string;
    "73": string;
    "74": string;
    "75": string;
    "76": string;
    "77": string;
    "78": string;
    "79": string;
    "8": string;
    "80": string;
    "81": string;
    "8192": string;
    "8193": string;
    "8194": string;
    "8195": string;
    "8196": string;
    "8197": string;
    "8198": string;
    "8199": string;
    "82": string;
    "8200": string;
    "8201": string;
    "8202": string;
    "8203": string;
    "8232": string;
    "8233": string;
    "8239": string;
    "8287": string;
    "83": string;
    "84": string;
    "85": string;
    "86": string;
    "87": string;
    "88": string;
    "89": string;
    "9": string;
    "90": string;
    "91": string;
    "92": string;
    "93": string;
    "94": string;
    "95": string;
    "96": string;
    "97": string;
    "98": string;
    "99": string;
    A: number;
    B: number;
    C: number;
    D: number;
    E: number;
    F: number;
    G: number;
    H: number;
    I: number;
    J: number;
    K: number;
    L: number;
    M: number;
    N: number;
    O: number;
    P: number;
    Q: number;
    R: number;
    S: number;
    T: number;
    U: number;
    V: number;
    W: number;
    X: number;
    Y: number;
    Z: number;
    a: number;
    ampersand: number;
    asterisk: number;
    at: number;
    b: number;
    backslash: number;
    backspace: number;
    backtick: number;
    bar: number;
    byteOrderMark: number;
    c: number;
    caret: number;
    carriageReturn: number;
    closeBrace: number;
    closeBracket: number;
    closeParen: number;
    colon: number;
    comma: number;
    d: number;
    dot: number;
    doubleQuote: number;
    e: number;
    emQuad: number;
    emSpace: number;
    enQuad: number;
    enSpace: number;
    equals: number;
    exclamation: number;
    f: number;
    figureSpace: number;
    formFeed: number;
    fourPerEmSpace: number;
    g: number;
    greaterThan: number;
    h: number;
    hairSpace: number;
    hash: number;
    i: number;
    ideographicSpace: number;
    j: number;
    k: number;
    l: number;
    lessThan: number;
    lineFeed: number;
    lineSeparator: number;
    m: number;
    mathematicalSpace: number;
    maxAsciiCharacter: number;
    minus: number;
    n: number;
    narrowNoBreakSpace: number;
    nextLine: number;
    nonBreakingSpace: number;
    nullCharacter: number;
    o: number;
    ogham: number;
    openBrace: number;
    openBracket: number;
    openParen: number;
    p: number;
    paragraphSeparator: number;
    percent: number;
    plus: number;
    punctuationSpace: number;
    q: number;
    question: number;
    r: number;
    s: number;
    semicolon: number;
    singleQuote: number;
    sixPerEmSpace: number;
    slash: number;
    space: number;
    t: number;
    tab: number;
    thinSpace: number;
    threePerEmSpace: number;
    tilde: number;
    u: number;
    v: number;
    verticalTab: number;
    w: number;
    x: number;
    y: number;
    z: number;
    zeroWidthSpace: number;
};
export const CheckFlags: {
    "1": string;
    "1024": string;
    "128": string;
    "16": string;
    "16384": string;
    "2": string;
    "2048": string;
    "256": string;
    "32": string;
    "4": string;
    "4096": string;
    "512": string;
    "6": string;
    "64": string;
    "8": string;
    "8192": string;
    "96": string;
    ContainsPrivate: number;
    ContainsProtected: number;
    ContainsPublic: number;
    ContainsStatic: number;
    Discriminant: number;
    HasLiteralType: number;
    HasNonUniformType: number;
    Instantiated: number;
    Late: number;
    OptionalParameter: number;
    Partial: number;
    Readonly: number;
    RestParameter: number;
    ReverseMapped: number;
    Synthetic: number;
    SyntheticMethod: number;
    SyntheticProperty: number;
};
export const ClassificationType: {
    "1": string;
    "10": string;
    "11": string;
    "12": string;
    "13": string;
    "14": string;
    "15": string;
    "16": string;
    "17": string;
    "18": string;
    "19": string;
    "2": string;
    "20": string;
    "21": string;
    "22": string;
    "23": string;
    "24": string;
    "25": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    bigintLiteral: number;
    className: number;
    comment: number;
    docCommentTagName: number;
    enumName: number;
    identifier: number;
    interfaceName: number;
    jsxAttribute: number;
    jsxAttributeStringLiteralValue: number;
    jsxCloseTagName: number;
    jsxOpenTagName: number;
    jsxSelfClosingTagName: number;
    jsxText: number;
    keyword: number;
    moduleName: number;
    numericLiteral: number;
    operator: number;
    parameterName: number;
    punctuation: number;
    regularExpressionLiteral: number;
    stringLiteral: number;
    text: number;
    typeAliasName: number;
    typeParameterName: number;
    whiteSpace: number;
};
export const ClassificationTypeNames: {
    bigintLiteral: string;
    className: string;
    comment: string;
    docCommentTagName: string;
    enumName: string;
    identifier: string;
    interfaceName: string;
    jsxAttribute: string;
    jsxAttributeStringLiteralValue: string;
    jsxCloseTagName: string;
    jsxOpenTagName: string;
    jsxSelfClosingTagName: string;
    jsxText: string;
    keyword: string;
    moduleName: string;
    numericLiteral: string;
    operator: string;
    parameterName: string;
    punctuation: string;
    stringLiteral: string;
    text: string;
    typeAliasName: string;
    typeParameterName: string;
    whiteSpace: string;
};
export const Comparison: {
    "-1": string;
    "0": string;
    "1": string;
    EqualTo: number;
    GreaterThan: number;
    LessThan: number;
};
export namespace Completions {
    const CompletionKind: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        Global: number;
        MemberLike: number;
        None: number;
        ObjectPropertyDeclaration: number;
        PropertyAccess: number;
        String: number;
    };
    namespace StringCompletions {
        function getStringLiteralCompletionDetails(name: any, sourceFile: any, position: any, contextToken: any, checker: any, options: any, host: any, cancellationToken: any): any;
        function getStringLiteralCompletions(sourceFile: any, position: any, contextToken: any, checker: any, options: any, host: any, log: any, preferences: any): any;
    }
    function createCompletionDetails(name: any, kindModifiers: any, kind: any, displayParts: any, documentation: any, tags: any, codeActions: any, source: any): any;
    function createCompletionDetailsForSymbol(symbol: any, checker: any, sourceFile: any, location: any, cancellationToken: any, codeActions: any, sourceDisplay: any): any;
    function getCompletionEntriesFromSymbols(symbols: any, entries: any, location: any, sourceFile: any, typeChecker: any, target: any, log: any, kind: any, preferences: any, propertyAccessToConvert: any, isJsxInitializer: any, recommendedCompletion: any, symbolToOriginInfoMap: any): any;
    function getCompletionEntryDetails(program: any, log: any, sourceFile: any, position: any, entryId: any, host: any, formatContext: any, preferences: any, cancellationToken: any): any;
    function getCompletionEntrySymbol(program: any, log: any, sourceFile: any, position: any, entryId: any): any;
    function getCompletionsAtPosition(host: any, program: any, log: any, sourceFile: any, position: any, preferences: any, triggerCharacter: any): any;
}
export const ConfigFileProgramReloadLevel: {
    "0": string;
    "1": string;
    "2": string;
    Full: number;
    None: number;
    Partial: number;
};
export class CoreServicesShimHostAdapter {
    constructor(shimHost: any);
    shimHost: any;
    useCaseSensitiveFileNames: any;
    directoryExists: any;
    realpath: any;
    fileExists(fileName: any): any;
    getDirectories(path: any): any;
    readDirectory(rootDir: any, extensions: any, exclude: any, include: any, depth: any): any;
    readFile(fileName: any): any;
}
export namespace Debug {
    function assert(expression: any, message: any, verboseDebugInfo: any, stackCrawlMark: any): void;
    function assertDefined(value: any, message: any): any;
    function assertEachDefined(value: any, message: any): any;
    function assertEachNode(_: any): void;
    function assertEqual(a: any, b: any, msg: any, msg2: any): void;
    function assertGreaterThanOrEqual(a: any, b: any): void;
    function assertLessThan(a: any, b: any, msg: any): void;
    function assertLessThanOrEqual(a: any, b: any): void;
    function assertMissingNode(_: any): void;
    function assertNever(member: any, message: any, stackCrawlMark: any): any;
    function assertNode(_: any): void;
    function assertOptionalNode(_: any): void;
    function assertOptionalToken(_: any): void;
    const currentAssertionLevel: number;
    function enableDebugInfo(): void;
    function fail(message: any, stackCrawlMark: any): void;
    function failBadSyntaxKind(node: any, message: any): any;
    function getFunctionName(func: any): any;
    const isDebugging: boolean;
    function shouldAssert(level: any): any;
    function showSymbol(symbol: any): any;
    function showSyntaxKind(node: any): any;
}
export const DiagnosticCategory: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    Error: number;
    Message: number;
    Suggestion: number;
    Warning: number;
};
export const Diagnostics: {
    A_0_modifier_cannot_be_used_with_an_import_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_0_modifier_cannot_be_used_with_an_interface_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_0_parameter_must_be_the_first_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_bigint_literal_cannot_use_exponential_notation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_bigint_literal_must_be_an_integer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_class_can_only_implement_an_object_type_or_intersection_of_object_types_with_statically_known_members: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_class_declaration_without_the_default_modifier_must_have_a_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_class_may_only_extend_another_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_class_member_cannot_have_the_0_keyword: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_comma_expression_is_not_allowed_in_a_computed_property_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_computed_property_name_in_a_class_property_declaration_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_computed_property_name_in_a_method_overload_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_computed_property_name_in_a_type_literal_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_computed_property_name_in_an_ambient_context_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_computed_property_name_in_an_interface_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_computed_property_name_must_be_of_type_string_number_symbol_or_any: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_computed_property_name_of_the_form_0_must_be_of_type_symbol: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_const_enum_member_can_only_be_accessed_using_a_string_literal: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_const_initializer_in_an_ambient_context_must_be_a_string_or_numeric_literal_or_literal_enum_reference: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_constructor_cannot_contain_a_super_call_when_its_class_extends_null: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_constructor_cannot_have_a_this_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_declare_modifier_cannot_be_used_in_an_already_ambient_context: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_decorator_can_only_decorate_a_method_implementation_not_an_overload: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_default_clause_cannot_appear_more_than_once_in_a_switch_statement: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_default_export_can_only_be_used_in_an_ECMAScript_style_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_definite_assignment_assertion_is_not_permitted_in_this_context: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_destructuring_declaration_must_have_an_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_dynamic_import_call_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declaration_for_the_Promise_constructor_or_include_ES2015_in_your_lib_option: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_dynamic_import_call_returns_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES2015_in_your_lib_option: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_file_cannot_have_a_reference_to_itself: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_for_await_of_statement_is_only_allowed_within_an_async_function_or_async_generator: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_function_returning_never_cannot_have_a_reachable_end_point: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_function_that_is_called_with_the_new_keyword_cannot_have_a_this_type_that_is_void: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_generator_cannot_have_a_void_type_annotation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_get_accessor_cannot_have_parameters: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_get_accessor_must_return_a_value: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_label_is_not_allowed_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_mixin_class_must_have_a_constructor_with_a_single_rest_parameter_of_type_any: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_module_cannot_have_multiple_default_exports: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_namespace_declaration_is_only_allowed_in_a_namespace_or_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_non_dry_build_would_build_project_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_non_dry_build_would_delete_the_following_files_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_parameter_property_cannot_be_declared_using_a_rest_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_parameter_property_is_only_allowed_in_a_constructor_implementation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_parameter_property_may_not_be_declared_using_a_binding_pattern: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_path_in_an_extends_option_must_be_relative_or_rooted_but_0_is_not: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_promise_must_have_a_then_method: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_property_of_a_class_whose_type_is_a_unique_symbol_type_must_be_both_static_and_readonly: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_property_of_an_interface_or_type_literal_whose_type_is_a_unique_symbol_type_must_be_readonly: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_required_element_cannot_follow_an_optional_element: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_required_parameter_cannot_follow_an_optional_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_rest_element_cannot_contain_a_binding_pattern: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_rest_element_cannot_have_a_property_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_rest_element_cannot_have_an_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_rest_element_must_be_last_in_a_destructuring_pattern: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_rest_element_must_be_last_in_a_tuple_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_rest_element_type_must_be_an_array_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_rest_parameter_cannot_be_optional: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_rest_parameter_cannot_have_an_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_rest_parameter_must_be_last_in_a_parameter_list: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_rest_parameter_must_be_of_an_array_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_return_statement_can_only_be_used_within_a_function_body: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_set_accessor_cannot_have_a_return_type_annotation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_set_accessor_cannot_have_an_optional_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_set_accessor_cannot_have_rest_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_set_accessor_must_have_exactly_one_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_set_accessor_parameter_cannot_have_an_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_signature_with_an_implementation_cannot_use_a_string_literal_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_tsconfig_json_file_is_already_defined_at_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_type_literal_property_cannot_have_an_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_type_predicate_cannot_reference_a_rest_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_type_predicate_cannot_reference_element_0_in_a_binding_pattern: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_type_predicate_s_type_must_be_assignable_to_its_parameter_s_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_variable_whose_type_is_a_unique_symbol_type_must_be_const: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    A_yield_expression_is_only_allowed_in_a_generator_body: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Abstract_methods_can_only_appear_within_an_abstract_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Abstract_property_0_in_class_1_cannot_be_accessed_in_the_constructor: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Accessibility_modifier_already_seen: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Accessors_must_both_be_abstract_or_non_abstract: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_0_to_existing_import_declaration_from_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_0_to_unresolved_variable: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_all_missing_async_modifiers: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_all_missing_imports: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_all_missing_members: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_all_missing_super_calls: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_async_modifier_to_containing_function: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_braces_to_arrow_function: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_default_import_0_to_existing_import_declaration_from_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_definite_assignment_assertion_to_property_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_definite_assignment_assertions_to_all_uninitialized_properties: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_index_signature_for_property_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_initializer_to_property_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_initializers_to_all_uninitialized_properties: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_missing_enum_member_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_missing_new_operator_to_all_calls: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_missing_new_operator_to_call: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_missing_super_call: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_missing_typeof: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_names_to_all_parameters_without_names: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_or_remove_braces_in_an_arrow_function: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_parameter_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_qualifier_to_all_unresolved_variables_matching_a_member_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_to_all_uncalled_decorators: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_ts_ignore_to_all_error_messages: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_undefined_type_to_all_uninitialized_properties: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_undefined_type_to_property_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_unknown_conversion_for_non_overlapping_types: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Add_unknown_to_all_conversions_of_non_overlapping_types: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Adding_a_tsconfig_json_file_will_help_organize_projects_that_contain_both_TypeScript_and_JavaScript_files_Learn_more_at_https_Colon_Slash_Slashaka_ms_Slashtsconfig: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Additional_Checks: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Advanced_Options: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    All_declarations_of_0_must_have_identical_modifiers: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    All_declarations_of_0_must_have_identical_type_parameters: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    All_declarations_of_an_abstract_method_must_be_consecutive: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    All_destructured_elements_are_unused: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: boolean;
    };
    All_imports_in_import_declaration_are_unused: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: boolean;
    };
    All_type_parameters_are_unused: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    All_variables_are_unused: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: boolean;
    };
    Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typechecking: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Allow_javascript_files_to_be_compiled: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Ambient_const_enums_are_not_allowed_when_the_isolatedModules_flag_is_provided: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Ambient_module_declaration_cannot_specify_relative_module_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_AMD_module_cannot_have_multiple_name_assignments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_abstract_accessor_cannot_have_an_implementation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_accessor_cannot_be_declared_in_an_ambient_context: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_accessor_cannot_have_type_parameters: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_argument_for_0_was_not_provided: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_argument_matching_this_binding_pattern_was_not_provided: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_arithmetic_operand_must_be_of_type_any_number_bigint_or_an_enum_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_arrow_function_cannot_have_a_this_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_async_function_or_method_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declaration_for_the_Promise_constructor_or_include_ES2015_in_your_lib_option: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_async_function_or_method_must_have_a_valid_awaitable_return_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_async_function_or_method_must_return_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES2015_in_your_lib_option: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_async_iterator_must_have_a_next_method: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_element_access_expression_should_take_an_argument: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_enum_member_cannot_have_a_numeric_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_export_assignment_can_only_be_used_in_a_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_export_assignment_cannot_be_used_in_a_namespace: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_export_assignment_cannot_have_modifiers: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_export_declaration_can_only_be_used_in_a_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_export_declaration_cannot_have_modifiers: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_expression_of_type_void_cannot_be_tested_for_truthiness: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_implementation_cannot_be_declared_in_ambient_contexts: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_import_declaration_can_only_be_used_in_a_namespace_or_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_import_declaration_cannot_have_modifiers: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_import_path_cannot_end_with_a_0_extension_Consider_importing_1_instead: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_index_expression_argument_must_be_of_type_string_number_symbol_or_any: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_index_signature_cannot_have_a_rest_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_index_signature_must_have_a_type_annotation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_index_signature_must_have_exactly_one_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_index_signature_parameter_cannot_have_a_question_mark: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_index_signature_parameter_cannot_have_an_accessibility_modifier: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_index_signature_parameter_cannot_have_an_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_index_signature_parameter_must_have_a_type_annotation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_index_signature_parameter_type_cannot_be_a_type_alias_Consider_writing_0_Colon_1_Colon_2_instead: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_index_signature_parameter_type_cannot_be_a_union_type_Consider_using_a_mapped_object_type_instead: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_index_signature_parameter_type_must_be_string_or_number: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_interface_can_only_extend_an_object_type_or_intersection_of_object_types_with_statically_known_members: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_interface_property_cannot_have_an_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_iterator_must_have_a_next_method: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_object_literal_cannot_have_property_and_accessor_with_the_same_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_object_member_cannot_be_declared_optional: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_outer_value_of_this_is_shadowed_by_this_container: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_overload_signature_cannot_be_declared_as_a_generator: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Annotate_everything_with_types_from_JSDoc: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Annotate_with_type_from_JSDoc: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Annotate_with_types_from_JSDoc: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Argument_expression_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Argument_for_0_option_must_be_Colon_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Argument_of_type_0_is_not_assignable_to_parameter_of_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Array_element_destructuring_pattern_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Asterisk_Slash_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambient_context: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Auto_discovery_for_typings_is_enabled_in_project_0_Running_extra_resolution_pass_for_module_1_using_cache_location_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Base_class_expressions_cannot_reference_class_type_parameters: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Base_constructor_return_type_0_is_not_an_object_type_or_intersection_of_object_types_with_statically_known_members: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Base_constructors_must_all_have_the_same_return_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Base_directory_to_resolve_non_absolute_module_names: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Basic_Options: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    BigInt_literals_are_not_available_when_targeting_lower_than_ESNext: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Binary_digit_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Binding_element_0_implicitly_has_an_1_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Block_scoped_variable_0_used_before_its_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Build_all_projects_including_those_that_appear_to_be_up_to_date: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Build_one_or_more_projects_and_their_dependencies_if_out_of_date: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Build_option_0_requires_a_value_of_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Building_project_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Call_decorator_expression: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Call_target_does_not_contain_any_signatures: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_access_0_1_because_0_is_a_type_but_not_a_namespace_Did_you_mean_to_retrieve_the_type_of_the_property_1_in_0_with_0_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_assign_a_0_constructor_type_to_a_1_constructor_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_assign_to_0_because_it_is_a_constant: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_assign_to_0_because_it_is_a_read_only_property: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_assign_to_0_because_it_is_not_a_variable: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_augment_module_0_with_value_exports_because_it_resolves_to_a_non_module_entity: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_compile_modules_using_option_0_unless_the_module_flag_is_amd_or_system: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_compile_namespaces_when_the_isolatedModules_flag_is_provided: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_create_an_instance_of_an_abstract_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_extend_a_class_0_Class_constructor_is_marked_as_private: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_extend_an_interface_0_Did_you_mean_implements: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_global_type_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_global_value_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_lib_definition_for_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_lib_definition_for_0_Did_you_mean_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_module_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_module_0_Consider_using_resolveJsonModule_to_import_module_with_json_extension: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_name_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_name_0_Did_you_mean_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_name_0_Did_you_mean_the_instance_member_this_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_name_0_Did_you_mean_the_static_member_1_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_es2015_or_later: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_include_dom: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_types_Slashjest_or_npm_i_types_Slashmocha_and_then_add_jest_or_mocha_to_the_types_field_in_your_tsconfig: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_types_Slashjquery_and_then_add_jquery_to_the_types_field_in_your_tsconfig: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_types_Slashnode_and_then_add_node_to_the_types_field_in_your_tsconfig: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_namespace_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_parameter_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_the_common_subdirectory_path_for_the_input_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_find_type_definition_file_for_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_import_type_declaration_files_Consider_importing_0_instead_of_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_invoke_an_expression_whose_type_lacks_a_call_signature_Type_0_has_no_compatible_call_signatures: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_invoke_an_object_which_is_possibly_null: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_invoke_an_object_which_is_possibly_null_or_undefined: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_invoke_an_object_which_is_possibly_undefined: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_prepend_project_0_because_it_does_not_have_outFile_set: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_re_export_a_type_when_the_isolatedModules_flag_is_provided: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_read_file_0_Colon_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_redeclare_block_scoped_variable_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_redeclare_exported_variable_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_redeclare_identifier_0_in_catch_clause: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_use_JSX_unless_the_jsx_flag_is_provided: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_use_imports_exports_or_module_augmentations_when_module_is_none: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_use_namespace_0_as_a_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_use_namespace_0_as_a_value: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Cannot_write_file_0_because_it_would_overwrite_input_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Catch_clause_variable_cannot_have_a_type_annotation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Catch_clause_variable_cannot_have_an_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Change_0_to_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Change_all_extended_interfaces_to_implements: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Change_all_jsdoc_style_types_to_TypeScript: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Change_all_jsdoc_style_types_to_TypeScript_and_add_undefined_to_nullable_types: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Change_extends_to_implements: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Change_spelling_to_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Checking_if_0_is_the_longest_matching_prefix_for_1_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Circular_definition_of_import_alias_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Circularity_detected_while_resolving_configuration_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_0_incorrectly_extends_base_class_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_0_incorrectly_implements_class_1_Did_you_mean_to_extend_1_and_inherit_its_members_as_a_subclass: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_0_incorrectly_implements_interface_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_0_used_before_its_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_declarations_cannot_have_more_than_one_augments_or_extends_tag: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_name_cannot_be_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_name_cannot_be_Object_when_targeting_ES5_with_module_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Class_static_side_0_incorrectly_extends_base_class_static_side_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Classes_can_only_extend_a_single_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Classes_containing_abstract_methods_must_be_marked_abstract: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Command_line_Options: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Compile_the_project_given_the_path_to_its_configuration_file_or_to_a_folder_with_a_tsconfig_json: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Compiler_option_0_expects_an_argument: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Compiler_option_0_requires_a_value_of_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Composite_projects_may_not_disable_declaration_emit: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Computed_property_names_are_not_allowed_in_enums: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Computed_values_are_not_permitted_in_an_enum_with_string_valued_members: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Concatenate_and_emit_output_to_single_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Conflicting_definitions_for_0_found_at_1_and_2_Consider_installing_a_specific_version_of_this_library_to_resolve_the_conflict: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Conflicts_are_in_this_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Constructor_implementation_is_missing: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Constructors_for_derived_classes_must_contain_a_super_call: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Containing_file_is_not_specified_and_root_directory_cannot_be_determined_skipping_lookup_in_node_modules_folder: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Conversion_of_type_0_to_type_1_may_be_a_mistake_because_neither_type_sufficiently_overlaps_with_the_other_If_this_was_intentional_convert_the_expression_to_unknown_first: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_0_to_mapped_object_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_all_constructor_functions_to_classes: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_all_require_to_import: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_all_to_async_functions: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_all_to_default_imports: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_default_export_to_named_export: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_function_0_to_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_function_to_an_ES2015_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_named_export_to_default_export: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_named_imports_to_namespace_import: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_namespace_import_to_named_imports: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_require_to_import: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_to_ES6_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_to_async_function: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Convert_to_default_import: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Corrupted_locale_file_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Could_not_find_a_declaration_file_for_module_0_1_implicitly_has_an_any_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Could_not_write_file_0_Colon_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    DIRECTORY: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Declaration_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Declaration_name_conflicts_with_built_in_global_identifier_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Declaration_or_statement_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Declare_method_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Declare_property_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Declare_static_method_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Declare_static_property_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Decorators_are_not_valid_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Default_export_of_the_module_has_or_is_using_private_name_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Definitions_of_the_following_identifiers_conflict_with_those_in_another_file_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Delete_all_unused_declarations: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Delete_the_outputs_of_all_projects: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Deprecated_Use_jsxFactory_instead_Specify_the_object_invoked_for_createElement_when_targeting_react_JSX_emit: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Deprecated_Use_outFile_instead_Concatenate_and_emit_output_to_single_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Deprecated_Use_skipLibCheck_instead_Skip_type_checking_of_default_library_declaration_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Did_you_mean_for_0_to_be_constrained_to_type_new_args_Colon_any_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Did_you_mean_to_call_this_expression: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Did_you_mean_to_use_new_with_this_expression: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Digit_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Directory_0_does_not_exist_skipping_all_lookups_in_it: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Disable_checking_for_this_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Disable_size_limitations_on_JavaScript_projects: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Disable_strict_checking_of_generic_signatures_in_function_types: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Disallow_inconsistently_cased_references_to_the_same_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_add_triple_slash_references_or_imported_modules_to_the_list_of_compiled_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_emit_comments_to_output: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_emit_declarations_for_code_that_has_an_internal_annotation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_emit_outputs: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_emit_outputs_if_any_errors_were_reported: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_emit_use_strict_directives_in_module_output: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_erase_const_enum_declarations_in_generated_code: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_generate_custom_helper_functions_like_extends_in_compiled_output: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_include_the_default_library_file_lib_d_ts: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_report_errors_on_unreachable_code: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_report_errors_on_unused_labels: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_resolve_the_real_path_of_symlinks: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Do_not_truncate_error_messages: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_function_implementation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_identifier_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_functions: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_identifier_newTarget_Compiler_uses_variable_declaration_newTarget_to_capture_new_target_meta_property_reference: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_label_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_number_index_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_property_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Duplicate_string_index_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Dynamic_import_cannot_have_type_arguments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Dynamic_import_is_only_supported_when_module_flag_is_commonjs_or_esNext: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Dynamic_import_must_have_one_specifier_as_an_argument: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Dynamic_import_s_specifier_must_be_of_type_string_but_here_has_type_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Emit_a_UTF_8_Byte_Order_Mark_BOM_in_the_beginning_of_output_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Emit_a_single_file_with_source_maps_instead_of_having_a_separate_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Emit_the_source_alongside_the_sourcemaps_within_a_single_file_requires_inlineSourceMap_or_sourceMap_to_be_set: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enable_all_strict_type_checking_options: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enable_project_compilation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enable_strict_bind_call_and_apply_methods_on_functions: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enable_strict_checking_of_function_types: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enable_strict_checking_of_property_initialization_in_classes: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enable_strict_null_checks: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enable_the_experimentalDecorators_option_in_your_configuration_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enable_tracing_of_the_name_resolution_process: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enable_verbose_logging: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enables_emit_interoperability_between_CommonJS_and_ES_Modules_via_creation_of_namespace_objects_for_all_imports_Implies_allowSyntheticDefaultImports: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enables_experimental_support_for_ES7_async_functions: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enables_experimental_support_for_ES7_decorators: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enables_experimental_support_for_emitting_type_metadata_for_decorators: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enum_0_used_before_its_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enum_declarations_can_only_merge_with_namespace_or_other_enum_declarations: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enum_declarations_must_all_be_const_or_non_const: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enum_member_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enum_member_must_have_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enum_name_cannot_be_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enum_type_0_circularly_references_itself: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Enum_type_0_has_members_with_initializers_that_are_not_literals: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Examples_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Excessive_stack_depth_comparing_types_0_and_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expected_0_1_type_arguments_provide_these_with_an_extends_tag: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expected_0_arguments_but_got_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expected_0_arguments_but_got_1_or_more: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expected_0_type_arguments_but_got_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expected_0_type_arguments_provide_these_with_an_extends_tag: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expected_at_least_0_arguments_but_got_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expected_at_least_0_arguments_but_got_1_or_more: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expected_corresponding_JSX_closing_tag_for_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expected_corresponding_closing_tag_for_JSX_fragment: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expected_type_of_0_field_in_package_json_to_be_1_got_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Experimental_Options: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_to_remove_this_warning: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Explicitly_specified_module_resolution_kind_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Export_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_export_default_or_another_module_format_instead: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Export_assignment_is_not_supported_when_module_flag_is_system: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Export_declaration_conflicts_with_exported_declaration_of_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Export_declarations_are_not_permitted_in_a_namespace: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Exported_external_package_typings_file_0_is_not_a_module_Please_contact_the_package_author_to_update_the_package_definition: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Exported_external_package_typings_file_cannot_contain_tripleslash_references_Please_contact_the_package_author_to_update_the_package_definition: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Exported_type_alias_0_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Exported_variable_0_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Exported_variable_0_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Exports_and_export_assignments_are_not_permitted_in_module_augmentations: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expression_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expression_or_comma_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expression_resolves_to_variable_declaration_0_that_compiler_uses_to_support_async_functions: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expression_resolves_to_variable_declaration_newTarget_that_compiler_uses_to_capture_new_target_meta_property_reference: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Extract_constant: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Extract_function: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Extract_to_0_in_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Extract_to_0_in_1_scope: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Extract_to_0_in_enclosing_scope: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    FILE: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    FILE_OR_DIRECTORY: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Failed_to_parse_file_0_Colon_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Fallthrough_case_in_switch: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_0_does_not_exist: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_0_exist_use_it_as_a_name_resolution_result: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_0_has_an_unsupported_extension_so_skipping_it: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_0_has_unsupported_extension_The_only_supported_extensions_are_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_0_is_not_a_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_0_is_not_in_project_file_list_Projects_must_list_all_files_or_use_an_include_pattern: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_0_not_found: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_change_detected_Starting_incremental_compilation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_is_a_CommonJS_module_it_may_be_converted_to_an_ES6_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_name_0_differs_from_already_included_file_name_1_only_in_casing: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_name_0_has_a_1_extension_stripping_it: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Fix_all_detected_spelling_errors: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Found_0_errors: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Found_0_errors_Watching_for_file_changes: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Found_1_error: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Found_1_error_Watching_for_file_changes: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Found_package_json_at_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Found_package_json_at_0_Package_ID_is_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_definitions_are_automatically_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_are_automatically_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Function_implementation_is_missing_or_not_immediately_following_the_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Function_implementation_name_must_be_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Function_overload_must_be_static: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Function_overload_must_not_be_static: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Function_type_which_lacks_return_type_annotation_implicitly_has_an_0_return_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Generate_get_and_set_accessors: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Generate_types_for_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Generate_types_for_all_packages_without_types: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Generates_a_sourcemap_for_each_corresponding_d_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Generates_corresponding_d_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Generates_corresponding_map_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Generator_implicitly_has_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Generators_are_not_allowed_in_an_ambient_context: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Generators_are_only_available_when_targeting_ECMAScript_2015_or_higher: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Generic_type_0_requires_1_type_argument_s: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Generic_type_0_requires_between_1_and_2_type_arguments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Getter_and_setter_accessors_do_not_agree_in_visibility: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Global_module_exports_may_only_appear_at_top_level: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Global_module_exports_may_only_appear_in_declaration_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Global_module_exports_may_only_appear_in_module_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Global_type_0_must_be_a_class_or_interface_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Global_type_0_must_have_1_type_parameter_s: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Hexadecimal_digit_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Identifier_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Identifier_expected_0_is_a_reserved_word_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Identifier_expected_esModule_is_reserved_as_an_exported_marker_when_transforming_ECMAScript_modules: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    If_the_0_package_actually_exposes_this_module_consider_sending_a_pull_request_to_amend_https_Colon_Slash_Slashgithub_com_SlashDefinitelyTyped_SlashDefinitelyTyped_Slashtree_Slashmaster_Slashtypes_Slash_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Ignore_this_error_message: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Implement_all_inherited_abstract_classes: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Implement_all_unimplemented_interfaces: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Implement_inherited_abstract_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Implement_interface_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Implements_clause_of_exported_class_0_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Implicit_conversion_of_a_symbol_to_a_string_will_fail_at_runtime_Consider_wrapping_this_expression_in_String: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Import_0_from_module_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Import_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_import_d_from_mod_or_another_module_format_instead: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Import_declaration_0_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Import_declaration_conflicts_with_local_declaration_of_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Import_declarations_in_a_namespace_cannot_reference_a_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Import_default_0_from_module_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Import_emit_helpers_from_tslib: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Import_may_be_converted_to_a_default_import: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Import_name_cannot_be_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relative_module_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_module: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    In_ambient_enum_declarations_member_initializer_must_be_constant_expression: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Include_modules_imported_with_json_extension: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Index_signature_in_type_0_only_permits_reading: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Index_signature_is_missing_in_type_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Index_signatures_are_incompatible: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Infer_all_types_from_usage: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Infer_parameter_types_from_usage: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Infer_type_of_0_from_usage: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Initialize_property_0_in_the_constructor: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Initialize_static_property_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Initializers_are_not_allowed_in_ambient_contexts: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Insert_command_line_options_and_files_from_a_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Install_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Install_all_missing_types_packages: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Interface_0_cannot_simultaneously_extend_types_1_and_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Interface_0_incorrectly_extends_interface_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Interface_declaration_cannot_have_implements_clause: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Interface_name_cannot_be_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Invalid_character: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Invalid_module_name_in_augmentation_Module_0_resolves_to_an_untyped_module_at_1_which_cannot_be_augmented: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Invalid_module_name_in_augmentation_module_0_cannot_be_found: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Invalid_reference_directive_syntax: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Invalid_use_of_0_Modules_are_automatically_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Invalid_use_of_0_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Invalid_value_for_jsxFactory_0_is_not_a_valid_identifier_or_qualified_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Invalid_value_for_reactNamespace_0_is_not_a_valid_identifier: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    It_is_highly_likely_that_you_are_missing_a_semicolon: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSDoc_0_1_does_not_match_the_extends_2_clause: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSDoc_0_is_not_attached_to_a_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSDoc_may_only_appear_in_the_last_parameter_of_a_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name_It_would_match_arguments_if_it_had_an_array_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSDoc_type_0_circularly_references_itself: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSDoc_typedef_tag_should_either_have_a_type_annotation_or_be_followed_by_property_or_member_tags: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSDoc_types_can_only_be_used_inside_documentation_comments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSDoc_types_may_be_moved_to_TypeScript_types: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_attribute_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_attributes_must_only_be_assigned_a_non_empty_expression: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_element_0_has_no_corresponding_closing_tag: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_element_attributes_type_0_may_not_be_a_union_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_element_type_0_does_not_have_any_construct_or_call_signatures: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_elements_cannot_have_multiple_attributes_with_the_same_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_expressions_must_have_one_parent_element: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_fragment_has_no_corresponding_closing_tag: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_fragment_is_not_supported_when_using_an_inline_JSX_factory_pragma: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_fragment_is_not_supported_when_using_jsxFactory: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    JSX_spread_child_must_be_an_array_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Jump_target_cannot_cross_function_boundary: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    KIND: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    LOCATION: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Language_service_is_disabled: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Left_side_of_comma_operator_is_unused_and_has_no_side_effects: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: boolean;
    };
    Line_break_not_permitted_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Line_terminator_not_permitted_before_arrow: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    List_of_folders_to_include_type_definitions_from: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    List_of_language_service_plugins: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    List_of_root_folders_whose_combined_content_represents_the_structure_of_the_project_at_runtime: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Loading_0_from_the_root_dir_1_candidate_location_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Loading_module_0_from_node_modules_folder_target_file_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Loading_module_as_file_Slash_folder_candidate_module_location_0_target_file_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Longest_matching_prefix_for_0_is_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Looking_up_in_node_modules_folder_initial_location_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Make_all_super_calls_the_first_statement_in_their_constructor: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Make_super_call_the_first_statement_in_the_constructor: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Mapped_object_type_implicitly_has_an_any_template_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Member_0_implicitly_has_an_1_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Member_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Merge_conflict_marker_encountered: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_default_0_declaration_instead: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Meta_property_0_is_only_allowed_in_the_body_of_a_function_declaration_function_expression_or_constructor: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Method_0_cannot_have_an_implementation_because_it_is_marked_abstract: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Method_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Method_0_of_exported_interface_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Modifiers_cannot_appear_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_does_not_refer_to_a_type_but_is_used_as_a_type_here_Did_you_mean_typeof_import_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_does_not_refer_to_a_value_but_is_used_as_a_value_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambiguity: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_has_no_default_export: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_has_no_exported_member_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_has_no_exported_member_1_Did_you_mean_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_is_hidden_by_a_local_declaration_with_the_same_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_uses_export_and_cannot_be_used_with_export_Asterisk: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_was_resolved_as_ambient_module_declared_in_1_since_this_file_was_not_modified: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_was_resolved_as_locally_declared_ambient_module_in_file_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_was_resolved_to_1_but_jsx_is_not_set: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_0_was_resolved_to_1_but_resolveJsonModule_is_not_used: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_Resolution_Options: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_name_0_matched_pattern_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_name_0_was_not_resolved: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_name_0_was_successfully_resolved_to_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_resolution_kind_is_not_specified_using_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Module_resolution_using_rootDirs_has_failed: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Move_to_a_new_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Multiple_consecutive_numeric_separators_are_not_permitted: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Multiple_constructor_implementations_are_not_allowed: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    NEWLINE: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Named_property_0_of_types_1_and_2_are_not_identical: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Namespace_0_has_no_exported_member_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    No_base_constructor_has_the_specified_number_of_type_arguments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    No_inputs_were_found_in_config_file_0_Specified_include_paths_were_1_and_exclude_paths_were_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    No_overload_expects_0_arguments_but_overloads_do_exist_that_expect_either_1_or_2_arguments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    No_overload_expects_0_type_arguments_but_overloads_do_exist_that_expect_either_1_or_2_type_arguments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Non_simple_parameter_declared_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Not_all_code_paths_return_a_value: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Numeric_index_type_0_is_not_assignable_to_string_index_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Numeric_separators_are_not_allowed_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Object_is_of_type_unknown: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Object_is_possibly_null: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Object_is_possibly_null_or_undefined: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Object_is_possibly_undefined: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Object_literal_may_only_specify_known_properties_but_0_does_not_exist_in_type_1_Did_you_mean_to_write_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Object_literal_s_property_0_implicitly_has_an_1_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Octal_digit_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Octal_literal_types_must_use_ES2015_syntax_Use_the_syntax_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Octal_literals_are_not_allowed_in_enums_members_initializer_Use_the_syntax_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Octal_literals_are_not_allowed_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher_Use_the_syntax_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Only_a_void_function_can_be_called_with_the_new_keyword: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Only_ambient_modules_can_use_quoted_names: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Only_amd_and_system_modules_are_supported_alongside_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Only_emit_d_ts_declaration_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Only_identifiers_Slashqualified_names_with_optional_type_arguments_are_currently_supported_in_a_class_extends_clause: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Operator_0_cannot_be_applied_to_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Operator_0_cannot_be_applied_to_types_1_and_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_0_can_only_be_specified_in_tsconfig_json_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_0_cannot_be_specified_with_option_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_0_cannot_be_specified_without_specifying_option_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_0_cannot_be_specified_without_specifying_option_1_or_option_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_0_should_have_array_of_strings_as_a_value: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_build_must_be_the_first_command_line_argument: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES2015_or_higher: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_paths_cannot_be_used_without_specifying_baseUrl_option: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_project_cannot_be_mixed_with_source_files_on_a_command_line: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_resolveJsonModule_can_only_be_specified_when_module_code_generation_is_commonjs_amd_es2015_or_esNext: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Option_resolveJsonModule_cannot_be_specified_without_node_module_resolution_strategy: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Options_0_and_1_cannot_be_combined: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Options_Colon: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Output_directory_for_generated_declaration_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Output_file_0_from_project_1_does_not_exist: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Output_file_0_has_not_been_built_from_source_file_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Overload_signature_is_not_compatible_with_function_implementation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Overload_signatures_must_all_be_abstract_or_non_abstract: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Overload_signatures_must_all_be_ambient_or_non_ambient: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Overload_signatures_must_all_be_exported_or_non_exported: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Overload_signatures_must_all_be_optional_or_required: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Overload_signatures_must_all_be_public_private_or_protected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_cannot_be_referenced_in_its_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_implicitly_has_an_1_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_is_not_in_the_same_position_as_parameter_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_exported_function_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_cannot_have_question_mark_and_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_declaration_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_has_a_name_but_no_type_Did_you_mean_0_Colon_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Parse_in_strict_mode_and_emit_use_strict_for_each_source_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Pattern_0_can_have_at_most_one_Asterisk_character: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Prefix_0_with_an_underscore: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Prefix_all_unused_declarations_with_where_possible: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Print_names_of_files_part_of_the_compilation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Print_names_of_generated_files_part_of_the_compilation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Print_the_compiler_s_version: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Print_the_final_configuration_instead_of_building: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Print_this_message: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Project_0_can_t_be_built_because_its_dependency_1_has_errors: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Project_0_is_out_of_date_because_its_dependency_1_is_out_of_date: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Project_0_is_out_of_date_because_oldest_output_1_is_older_than_newest_input_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Project_0_is_out_of_date_because_output_file_1_does_not_exist: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Project_0_is_up_to_date: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Project_0_is_up_to_date_because_newest_input_1_is_older_than_oldest_output_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Project_0_is_up_to_date_with_d_ts_files_from_its_dependencies: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Project_references_may_not_form_a_circular_graph_Cycle_detected_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Projects_in_this_build_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Projects_to_reference: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_does_not_exist_on_const_enum_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_does_not_exist_on_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_does_not_exist_on_type_1_Did_you_forget_to_use_await: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_does_not_exist_on_type_1_Did_you_mean_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_has_conflicting_declarations_and_is_inaccessible_in_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_has_no_initializer_and_is_not_definitely_assigned_in_the_constructor: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_implicitly_has_type_any_because_its_get_accessor_lacks_a_return_type_annotation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_parameter_type_annotation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_implicitly_has_type_any_but_a_better_type_for_its_get_accessor_may_be_inferred_from_usage: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_implicitly_has_type_any_but_a_better_type_for_its_set_accessor_may_be_inferred_from_usage: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_in_type_1_is_not_assignable_to_the_same_property_in_base_type_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_in_type_1_is_not_assignable_to_type_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_a_static_member_of_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_declared_but_its_value_is_never_read: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: boolean;
    };
    Property_0_is_incompatible_with_index_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_incompatible_with_rest_element_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_missing_in_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_missing_in_type_1_but_required_in_type_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_optional_in_type_1_but_required_in_type_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_private_and_only_accessible_within_class_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_private_in_type_1_but_not_in_type_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_protected_in_type_1_but_public_in_type_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_used_before_being_assigned: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_is_used_before_its_initialization: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_of_exported_class_expression_may_not_be_private_or_protected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_of_exported_interface_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_of_type_1_is_not_assignable_to_string_index_type_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_0_was_also_declared_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_assignment_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_destructuring_pattern_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_or_signature_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Property_value_can_only_be_string_literal_numeric_literal_true_false_null_object_literal_or_array_literal: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Provide_full_support_for_iterables_in_for_of_spread_and_destructuring_when_targeting_ES5_or_ES3: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_method_0_of_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_property_0_of_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_static_method_0_of_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Public_static_property_0_of_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Qualified_name_0_is_not_allowed_without_a_leading_param_object_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Raise_error_on_expressions_and_declarations_with_an_implied_any_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Raise_error_on_this_expressions_with_an_implied_any_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Redirect_output_structure_to_the_directory: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Referenced_project_0_must_have_setting_composite_Colon_true: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Remove_all_unreachable_code: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Remove_all_unused_labels: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Remove_braces_from_arrow_function: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Remove_declaration_for_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Remove_destructuring: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Remove_import_from_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Remove_template_tag: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Remove_type_parameters: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Remove_unreachable_code: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Remove_unused_label: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Remove_variable_statement: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Replace_all_unused_infer_with_unknown: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Replace_import_with_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Replace_infer_0_with_unknown: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Report_error_when_not_all_code_paths_in_function_return_a_value: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Report_errors_for_fallthrough_cases_in_switch_statement: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Report_errors_in_js_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Report_errors_on_unused_locals: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Report_errors_on_unused_parameters: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Required_type_parameters_may_not_follow_optional_type_parameters: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolution_for_module_0_was_found_in_cache_from_location_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolve_keyof_to_string_valued_property_names_only_no_numbers_or_symbols: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolving_from_node_modules_folder: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolving_module_0_from_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolving_module_name_0_relative_to_base_url_1_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolving_real_path_for_0_result_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolving_type_reference_directive_0_containing_file_1_root_directory_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolving_type_reference_directive_0_containing_file_1_root_directory_not_set: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolving_type_reference_directive_0_containing_file_not_set_root_directory_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolving_type_reference_directive_0_containing_file_not_set_root_directory_not_set: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolving_using_primary_search_paths: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Resolving_with_primary_search_path_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Rest_parameter_0_implicitly_has_an_any_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Rest_parameter_0_implicitly_has_an_any_type_but_a_better_type_may_be_inferred_from_usage: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Rest_signatures_are_incompatible: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Rest_types_may_only_be_created_from_object_types: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_annotation_circularly_references_itself: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_exported_function_has_or_is_using_private_name_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_getter_0_from_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Reusing_module_resolutions_originating_in_0_since_resolutions_are_unchanged_from_old_program: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Reusing_resolution_of_module_0_to_file_1_from_old_program: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Rewrite_all_as_indexed_access_types: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Rewrite_as_the_indexed_access_type_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Root_directory_cannot_be_determined_skipping_primary_search_paths: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    STRATEGY: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Scoped_package_detected_looking_in_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Setters_cannot_return_a_value: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Show_all_compiler_options: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Show_diagnostic_information: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Show_verbose_diagnostic_information: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Show_what_would_be_built_or_deleted_if_specified_with_clean: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Signature_0_must_be_a_type_predicate: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Skip_type_checking_of_declaration_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Skipping_build_of_project_0_because_its_dependency_1_has_errors: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Source_Map_Options: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specifier_of_dynamic_import_cannot_be_spread_element: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specify_ECMAScript_target_version_Colon_ES3_default_ES5_ES2015_ES2016_ES2017_ES2018_or_ESNEXT: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specify_JSX_code_generation_Colon_preserve_react_native_or_react: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specify_library_files_to_be_included_in_the_compilation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specify_module_code_generation_Colon_none_commonjs_amd_system_umd_es2015_or_ESNext: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specify_the_JSX_factory_function_to_use_when_targeting_react_JSX_emit_e_g_React_createElement_or_h: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Spread_types_may_only_be_created_from_object_types: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Starting_compilation_in_watch_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Statement_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Statements_are_not_allowed_in_ambient_contexts: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Static_members_cannot_reference_class_type_parameters: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Static_property_0_conflicts_with_built_in_property_Function_0_of_constructor_function_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Strict_Type_Checking_Options: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    String_literal_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    String_literal_with_double_quotes_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Stylize_errors_and_messages_using_color_and_context_experimental: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Subsequent_property_declarations_must_have_the_same_type_Property_0_must_be_of_type_1_but_here_has_type_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Substitution_0_for_pattern_1_has_incorrect_type_expected_string_got_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Substitution_0_in_pattern_1_in_can_have_at_most_one_Asterisk_character: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Substitutions_for_pattern_0_should_be_an_array: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Substitutions_for_pattern_0_shouldn_t_be_an_empty_array: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Successfully_created_a_tsconfig_json_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Suppress_excess_property_checks_for_object_literals: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Syntax_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_0_operator_cannot_be_applied_to_type_symbol: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_Object_type_is_assignable_to_very_few_other_types_Did_you_mean_to_use_the_any_type_instead: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_standard_function_expression: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_arguments_object_cannot_be_referenced_in_an_async_function_or_method_in_ES3_and_ES5_Consider_using_a_standard_function_or_method: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_body_of_an_if_statement_cannot_be_the_empty_statement: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_character_set_of_the_input_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_containing_arrow_function_captures_the_global_value_of_this_which_implicitly_has_type_any: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_containing_function_or_module_body_is_too_large_for_control_flow_analysis: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_current_host_does_not_support_the_0_option: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_expected_type_comes_from_property_0_which_is_declared_here_on_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_expected_type_comes_from_the_return_type_of_this_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_expected_type_comes_from_this_index_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_expression_of_an_export_assignment_must_be_an_identifier_or_qualified_name_in_an_ambient_context: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_files_list_in_config_file_0_is_empty: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_first_parameter_of_the_then_method_of_a_promise_must_be_a_callback: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_global_type_JSX_0_may_not_have_more_than_one_property: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_import_meta_meta_property_is_only_allowed_using_ESNext_for_the_target_and_module_compiler_options: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_inferred_type_of_0_cannot_be_named_without_a_reference_to_1_This_is_likely_not_portable_A_type_annotation_is_necessary: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_inferred_type_of_0_references_an_inaccessible_1_type_A_type_annotation_is_necessary: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_left_hand_side_of_a_for_in_statement_must_be_a_variable_or_a_property_access: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_locale_used_when_displaying_messages_to_the_user_e_g_en_us: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_operand_of_a_delete_operator_cannot_be_a_read_only_property: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_operand_of_a_delete_operator_must_be_a_property_reference: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_return_type_of_a_JSX_element_constructor_must_return_an_object_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_return_type_of_a_property_decorator_function_must_be_either_void_or_any: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter_but_here_has_type_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_specified_path_does_not_exist_Colon_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_target_of_an_assignment_must_be_a_variable_or_a_property_access: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_target_of_an_object_rest_assignment_must_be_a_variable_or_a_property_access: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_this_context_of_type_0_is_not_assignable_to_method_s_this_of_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_this_types_of_each_signature_are_incompatible: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_type_of_a_function_declaration_must_match_the_function_s_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_type_returned_by_the_next_method_of_an_async_iterator_must_be_a_promise_for_a_type_with_a_value_property: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_type_returned_by_the_next_method_of_an_iterator_must_have_a_value_property: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    The_with_statement_is_not_supported_All_symbols_in_a_with_block_will_have_type_any: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    This_JSX_tag_s_0_prop_expects_a_single_child_of_type_1_but_multiple_children_were_provided: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    This_JSX_tag_s_0_prop_expects_type_1_which_requires_multiple_children_but_only_a_single_child_was_provided: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    This_condition_will_always_return_0_since_the_types_1_and_2_have_no_overlap: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    This_constructor_function_may_be_converted_to_a_class_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    This_may_be_converted_to_an_async_function: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    This_module_can_only_be_referenced_with_ECMAScript_imports_Slashexports_by_turning_on_the_0_flag_and_referencing_its_default_export: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    This_parameter_is_not_allowed_with_use_strict_directive: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    This_syntax_requires_an_imported_helper_but_module_0_cannot_be_found: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    This_syntax_requires_an_imported_helper_named_1_but_module_0_has_no_exported_member_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Trailing_comma_not_allowed: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Transpile_each_file_as_a_separate_module_similar_to_ts_transpileModule: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Try_npm_install_types_Slash_1_if_it_exists_or_add_a_new_declaration_d_ts_file_containing_declare_module_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Trying_other_entries_in_rootDirs: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Trying_substitution_0_candidate_module_location_Colon_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Tuple_type_0_of_length_1_has_no_element_at_index_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_cannot_be_used_as_an_index_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_cannot_be_used_to_index_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_does_not_satisfy_the_constraint_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_has_no_matching_index_signature_for_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_has_no_properties_in_common_with_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_missing_the_following_properties_from_type_1_Colon_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_missing_the_following_properties_from_type_1_Colon_2_and_3_more: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_not_a_constructor_function_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_not_a_valid_async_function_return_type_in_ES5_SlashES3_because_it_does_not_refer_to_a_Promise_compatible_constructor_value: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_not_an_array_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_not_an_array_type_or_a_string_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_not_an_array_type_or_a_string_type_Use_compiler_option_downlevelIteration_to_allow_iterating_of_iterators: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_not_an_array_type_or_a_string_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_not_an_array_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_not_assignable_to_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_not_assignable_to_type_1_Two_different_types_with_this_name_exist_but_they_are_unrelated: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_not_comparable_to_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_is_not_generic: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_must_have_a_Symbol_asyncIterator_method_that_returns_an_async_iterator: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_must_have_a_Symbol_iterator_method_that_returns_an_iterator: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_provides_no_match_for_the_signature_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_0_recursively_references_itself_as_a_base_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_alias_0_circularly_references_itself: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_alias_name_cannot_be_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_annotation_cannot_appear_on_a_constructor_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_argument_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_argument_list_cannot_be_empty: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_arguments_cannot_be_used_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_declaration_files_to_be_included_in_compilation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_of_computed_property_s_value_is_0_which_is_not_assignable_to_type_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_of_iterated_elements_of_a_yield_Asterisk_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_of_yield_operand_in_an_async_generator_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_originates_at_this_import_A_namespace_style_import_cannot_be_called_or_constructed_and_will_cause_a_failure_at_runtime_Consider_using_a_default_import_or_import_require_here_instead: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_0_has_a_circular_constraint: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_0_has_a_circular_default: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_0_of_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_0_of_exported_function_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_0_of_exported_type_alias_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_declaration_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_defaults_can_only_reference_previously_declared_type_parameters: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_list_cannot_be_empty: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameter_name_cannot_be_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_parameters_cannot_appear_on_a_constructor_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_predicate_0_is_not_assignable_to_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_reference_directive_0_was_not_resolved: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Types_have_separate_declarations_of_a_private_property_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Types_of_parameters_0_and_1_are_incompatible: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Types_of_property_0_are_incompatible: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unable_to_open_file_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unexpected_end_of_text: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unexpected_token: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unexpected_token_A_constructor_method_accessor_or_property_was_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unexpected_token_A_type_parameter_name_was_expected_without_curly_braces: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unexpected_token_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unknown_build_option_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unknown_compiler_option_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unknown_option_excludes_Did_you_mean_exclude: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unknown_type_acquisition_option_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unreachable_code_detected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: boolean;
    };
    Unsupported_locale_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unterminated_Unicode_escape_sequence: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unterminated_quoted_string_in_response_file_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unterminated_regular_expression_literal: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unterminated_string_literal: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unterminated_template_literal: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Untyped_function_calls_may_not_accept_type_arguments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Unused_label: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: boolean;
    };
    Updating_output_timestamps_of_project_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Updating_unchanged_output_timestamps_of_project_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Use_synthetic_default_member: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Using_compiler_options_of_project_reference_redirect_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    VERSION: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Value_of_type_0_has_no_properties_in_common_with_type_1_Did_you_mean_to_call_it: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Value_of_type_0_is_not_callable_Did_you_mean_to_include_new: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Variable_0_implicitly_has_an_1_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Variable_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Variable_0_implicitly_has_type_1_in_some_locations_but_a_better_type_may_be_inferred_from_usage: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Variable_0_implicitly_has_type_1_in_some_locations_where_its_type_cannot_be_determined: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Variable_0_is_used_before_being_assigned: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Variable_declaration_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Variable_declaration_list_cannot_be_empty: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Version_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Watch_input_files: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    Whether_to_keep_outdated_console_output_in_watch_mode_instead_of_clearing_the_screen: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    You_cannot_rename_a_module_via_a_global_import: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    You_cannot_rename_this_element: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    and_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    await_expression_is_only_allowed_within_an_async_function: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    await_expressions_cannot_be_used_in_a_parameter_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    baseUrl_option_is_set_to_0_using_this_value_to_resolve_non_relative_module_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    case_or_default_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    class_expressions_are_not_currently_supported: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    const_declarations_can_only_be_declared_inside_a_block: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    const_declarations_must_be_initialized: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    const_enum_member_initializer_was_evaluated_to_a_non_finite_value: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    const_enum_member_initializers_can_only_contain_literal_values_and_other_computed_enum_values: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment_or_type_query: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    delete_cannot_be_called_on_an_identifier_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    delete_this_Project_0_is_up_to_date_because_it_was_previously_built: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    enum_declarations_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    export_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always_visible: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    extends_clause_already_seen: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    extends_clause_must_precede_implements_clause: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    extends_clause_of_exported_class_0_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    extends_clause_of_exported_interface_0_has_or_is_using_private_name_1: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    get_and_set_accessor_must_have_the_same_this_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    get_and_set_accessor_must_have_the_same_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    implements_clause_already_seen: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    implements_clauses_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    import_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    infer_declarations_are_only_permitted_in_the_extends_clause_of_a_conditional_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    interface_declarations_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    let_declarations_can_only_be_declared_inside_a_block: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    module_declarations_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    non_null_assertions_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    options: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    or_expected: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    package_json_does_not_have_a_0_field: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    package_json_does_not_have_a_typesVersions_entry_that_matches_version_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    package_json_has_0_field_1_that_references_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    package_json_has_a_typesVersions_entry_0_that_is_not_a_valid_semver_range: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    package_json_has_a_typesVersions_entry_0_that_matches_compiler_version_1_looking_for_a_pattern_to_match_module_name_2: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    package_json_has_a_typesVersions_field_with_version_specific_path_mappings: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    parameter_modifiers_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    paths_option_is_specified_looking_for_a_pattern_to_match_module_name_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    require_call_may_be_converted_to_an_import: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    rootDirs_option_is_set_using_it_to_resolve_relative_module_name_0: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    super_can_only_be_referenced_in_a_derived_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    super_cannot_be_referenced_in_a_computed_property_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    super_cannot_be_referenced_in_constructor_arguments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_higher: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    super_must_be_followed_by_an_argument_list_or_member_access: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    this_cannot_be_referenced_in_a_computed_property_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    this_cannot_be_referenced_in_a_module_or_namespace_body: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    this_cannot_be_referenced_in_a_static_property_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    this_cannot_be_referenced_in_constructor_arguments: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    this_cannot_be_referenced_in_current_location: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    this_implicitly_has_type_any_because_it_does_not_have_a_type_annotation: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    type_aliases_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    type_arguments_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    type_assertion_expressions_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    type_parameter_declarations_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    types_can_only_be_used_in_a_ts_file: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    unique_symbol_types_are_not_allowed_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    unique_symbol_types_are_only_allowed_on_variables_in_a_variable_statement: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    unique_symbol_types_may_not_be_used_on_a_variable_declaration_with_a_binding_name: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    use_strict_directive_cannot_be_used_with_non_simple_parameter_list: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    use_strict_directive_used_here: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    with_statements_are_not_allowed_in_an_async_function_block: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    with_statements_are_not_allowed_in_strict_mode: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    yield_expressions_cannot_be_used_in_a_parameter_initializer: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
};
export namespace DocumentHighlights {
    function getDocumentHighlights(program: any, cancellationToken: any, sourceFile: any, position: any, sourceFilesToSearch: any): any;
}
export const EmitFlags: {
    "0": string;
    "1": string;
    "1024": string;
    "1048576": string;
    "128": string;
    "131072": string;
    "1536": string;
    "16": string;
    "16384": string;
    "16777216": string;
    "2": string;
    "2048": string;
    "2097152": string;
    "256": string;
    "262144": string;
    "32": string;
    "32768": string;
    "33554432": string;
    "384": string;
    "4": string;
    "4096": string;
    "4194304": string;
    "48": string;
    "512": string;
    "524288": string;
    "64": string;
    "65536": string;
    "67108864": string;
    "8": string;
    "8192": string;
    "8388608": string;
    AdviseOnEmitNode: number;
    AsyncFunctionBody: number;
    CapturesThis: number;
    CustomPrologue: number;
    ExportName: number;
    HasEndOfDeclarationMarker: number;
    HelperName: number;
    Indented: number;
    InternalName: number;
    Iterator: number;
    LocalName: number;
    NeverApplyImportHelper: number;
    NoAsciiEscaping: number;
    NoComments: number;
    NoHoisting: number;
    NoIndentation: number;
    NoLeadingComments: number;
    NoLeadingSourceMap: number;
    NoNestedComments: number;
    NoNestedSourceMaps: number;
    NoSourceMap: number;
    NoSubstitution: number;
    NoTokenLeadingSourceMaps: number;
    NoTokenSourceMaps: number;
    NoTokenTrailingSourceMaps: number;
    NoTrailingComments: number;
    NoTrailingSourceMap: number;
    None: number;
    ReuseTempVariableScope: number;
    SingleLine: number;
    TypeScriptClassWrapper: number;
};
export const EmitHint: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    EmbeddedStatement: number;
    Expression: number;
    IdentifierName: number;
    MappedTypeParameter: number;
    SourceFile: number;
    Unspecified: number;
};
export const EndOfLineState: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    InDoubleQuoteStringLiteral: number;
    InMultiLineCommentTrivia: number;
    InSingleQuoteStringLiteral: number;
    InTemplateHeadOrNoSubstitutionTemplate: number;
    InTemplateMiddleOrTail: number;
    InTemplateSubstitutionPosition: number;
    None: number;
};
export const EnumKind: {
    "0": string;
    "1": string;
    Literal: number;
    Numeric: number;
};
export const ExitStatus: {
    "0": string;
    "1": string;
    "2": string;
    DiagnosticsPresent_OutputsGenerated: number;
    DiagnosticsPresent_OutputsSkipped: number;
    Success: number;
};
export const Extension: {
    Dts: string;
    Js: string;
    Json: string;
    Jsx: string;
    Ts: string;
    Tsx: string;
};
export const ExtensionPriority: {
    "0": string;
    "2": string;
    DeclarationAndJavaScriptFiles: number;
    Highest: number;
    Lowest: number;
    TypeScriptFiles: number;
};
export const ExternalEmitHelpers: {
    "1": string;
    "1024": string;
    "128": string;
    "1536": string;
    "16": string;
    "16384": string;
    "2": string;
    "2048": string;
    "256": string;
    "26624": string;
    "32": string;
    "32768": string;
    "4": string;
    "4096": string;
    "512": string;
    "6144": string;
    "64": string;
    "65536": string;
    "8": string;
    "8192": string;
    Assign: number;
    AsyncDelegator: number;
    AsyncDelegatorIncludes: number;
    AsyncGenerator: number;
    AsyncGeneratorIncludes: number;
    AsyncValues: number;
    Await: number;
    Awaiter: number;
    Decorate: number;
    ExportStar: number;
    Extends: number;
    FirstEmitHelper: number;
    ForAwaitOfIncludes: number;
    ForOfIncludes: number;
    Generator: number;
    LastEmitHelper: number;
    MakeTemplateObject: number;
    Metadata: number;
    Param: number;
    Read: number;
    Rest: number;
    Spread: number;
    SpreadIncludes: number;
    Values: number;
};
export const FileWatcherEventKind: {
    "0": string;
    "1": string;
    "2": string;
    Changed: number;
    Created: number;
    Deleted: number;
};
export namespace FindAllReferences {
    namespace Core {
        function eachExportReference(sourceFiles: any, checker: any, cancellationToken: any, exportSymbol: any, exportingModuleSymbol: any, exportName: any, isDefaultExport: any, cb: any): void;
        function eachSignatureCall(signature: any, sourceFiles: any, checker: any, cb: any): void;
        function eachSymbolReferenceInFile(definition: any, checker: any, sourceFile: any, cb: any): any;
        function getIntersectingMeaningFromDeclarations(node: any, symbol: any): any;
        function getReferenceEntriesForShorthandPropertyAssignment(node: any, checker: any, addReference: any): void;
        function getReferencedSymbolsForNode(position: any, node: any, program: any, sourceFiles: any, cancellationToken: any, options: any, sourceFilesSet: any): any;
        function isSymbolReferencedInFile(definition: any, checker: any, sourceFile: any): any;
    }
    const DefinitionKind: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        Keyword: number;
        Label: number;
        String: number;
        Symbol: number;
        This: number;
    };
    const EntryKind: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        Node: number;
        SearchedLocalFoundProperty: number;
        SearchedPropertyFoundLocal: number;
        Span: number;
        StringLiteral: number;
    };
    const ExportKind: {
        "0": string;
        "1": string;
        "2": string;
        Default: number;
        ExportEquals: number;
        Named: number;
    };
    const ImportExport: {
        "0": string;
        "1": string;
        Export: number;
        Import: number;
    };
    function createImportTracker(sourceFiles: any, sourceFilesSet: any, checker: any, cancellationToken: any): any;
    function findModuleReferences(program: any, sourceFiles: any, searchModuleSymbol: any): any;
    function findReferenceOrRenameEntries(program: any, cancellationToken: any, sourceFiles: any, node: any, position: any, options: any, convertEntry: any): any;
    function findReferencedSymbols(program: any, cancellationToken: any, sourceFiles: any, sourceFile: any, position: any): any;
    function getExportInfo(exportSymbol: any, exportKind: any, checker: any): any;
    function getImplementationsAtPosition(program: any, cancellationToken: any, sourceFiles: any, sourceFile: any, position: any): any;
    function getImportOrExportSymbol(node: any, symbol: any, checker: any, comingFromExport: any): any;
    function getReferenceEntriesForNode(position: any, node: any, program: any, sourceFiles: any, cancellationToken: any, options: any, sourceFilesSet: any): any;
    function getTextSpanOfEntry(entry: any): any;
    function nodeEntry(node: any, kind: any): any;
    function toHighlightSpan(entry: any): any;
    function toReferenceEntry(entry: any): any;
    function toRenameLocation(entry: any, originalNode: any, checker: any, providePrefixAndSuffixText: any): any;
}
export const FlattenLevel: {
    "0": string;
    "1": string;
    All: number;
    ObjectRest: number;
};
export const FlowFlags: {
    "1": string;
    "1024": string;
    "12": string;
    "128": string;
    "16": string;
    "2": string;
    "2048": string;
    "256": string;
    "32": string;
    "4": string;
    "4096": string;
    "512": string;
    "64": string;
    "8": string;
    "96": string;
    AfterFinally: number;
    ArrayMutation: number;
    Assignment: number;
    BranchLabel: number;
    Condition: number;
    FalseCondition: number;
    Label: number;
    LoopLabel: number;
    PreFinally: number;
    Referenced: number;
    Shared: number;
    Start: number;
    SwitchClause: number;
    TrueCondition: number;
    Unreachable: number;
};
export const ForegroundColorEscapeSequences: {
    Blue: string;
    Cyan: string;
    Grey: string;
    Red: string;
    Yellow: string;
};
export const FunctionFlags: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    Async: number;
    AsyncGenerator: number;
    Generator: number;
    Invalid: number;
    Normal: number;
};
export const GeneratedIdentifierFlags: {
    "0": string;
    "1": string;
    "16": string;
    "2": string;
    "3": string;
    "32": string;
    "4": string;
    "7": string;
    "8": string;
    Auto: number;
    FileLevel: number;
    KindMask: number;
    Loop: number;
    Node: number;
    None: number;
    Optimistic: number;
    ReservedInNestedScopes: number;
    Unique: number;
};
export namespace GoToDefinition {
    function findReferenceInPosition(refs: any, pos: any): any;
    function getDefinitionAndBoundSpan(program: any, sourceFile: any, position: any): any;
    function getDefinitionAtPosition(program: any, sourceFile: any, position: any): any;
    function getReferenceAtPosition(sourceFile: any, position: any, program: any): any;
    function getTypeDefinitionAtPosition(typeChecker: any, sourceFile: any, position: any): any;
}
export const HighlightSpanKind: {
    definition: string;
    none: string;
    reference: string;
    writtenReference: string;
};
export const IndentStyle: {
    "0": string;
    "1": string;
    "2": string;
    Block: number;
    None: number;
    Smart: number;
};
export const IndexKind: {
    "0": string;
    "1": string;
    Number: number;
    String: number;
};
export const InferenceFlags: {
    "0": string;
    "1": string;
    "2": string;
    AnyDefault: number;
    NoDefault: number;
    None: number;
};
export const InferencePriority: {
    "1": string;
    "16": string;
    "2": string;
    "28": string;
    "32": string;
    "4": string;
    "64": string;
    "8": string;
    AlwaysStrict: number;
    HomomorphicMappedType: number;
    LiteralKeyof: number;
    MappedTypeConstraint: number;
    NakedTypeVariable: number;
    NoConstraints: number;
    PriorityImpliesCombination: number;
    ReturnType: number;
};
export const InternalSymbolName: {
    Call: string;
    Class: string;
    Computed: string;
    Constructor: string;
    Default: string;
    ExportEquals: string;
    ExportStar: string;
    Function: string;
    Global: string;
    Index: string;
    JSXAttributes: string;
    Missing: string;
    New: string;
    Object: string;
    Resolving: string;
    This: string;
    Type: string;
};
export namespace JsDoc {
    function getDocCommentTemplateAtPosition(newLine: any, sourceFile: any, position: any): any;
    function getJSDocParameterNameCompletionDetails(name: any): any;
    function getJSDocParameterNameCompletions(tag: any): any;
    function getJSDocTagCompletionDetails(name: any): any;
    function getJSDocTagCompletions(): any;
    function getJSDocTagNameCompletionDetails(name: any): any;
    function getJSDocTagNameCompletions(): any;
    function getJsDocCommentsFromDeclarations(declarations: any): any;
    function getJsDocTagsFromDeclarations(declarations: any): any;
}
export namespace JsTyping {
    const PackageNameValidationResult: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        EmptyName: number;
        NameContainsNonURISafeCharacters: number;
        NameStartsWithDot: number;
        NameStartsWithUnderscore: number;
        NameTooLong: number;
        Ok: number;
        ScopedPackagesNotSupported: number;
    };
    function discoverTypings(host: any, log: any, fileNames: any, projectRootPath: any, safeList: any, packageNameToTypingLocation: any, typeAcquisition: any, unresolvedImports: any, typesRegistry: any): any;
    function isTypingUpToDate(cachedTyping: any, availableTypingVersions: any): any;
    function loadSafeList(host: any, safeListPath: any): any;
    function loadTypesMap(host: any, typesMapPath: any): any;
    const nodeCoreModuleList: string[];
    const nodeCoreModules: Map;
    function renderPackageNameValidationFailure(result: any, typing: any): any;
    function validatePackageName(packageName: any): any;
}
export const JsxEmit: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    None: number;
    Preserve: number;
    React: number;
    ReactNative: number;
};
export const JsxFlags: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    IntrinsicElement: number;
    IntrinsicIndexedElement: number;
    IntrinsicNamedElement: number;
    None: number;
};
export const JsxReferenceKind: {
    "0": string;
    "1": string;
    "2": string;
    Component: number;
    Function: number;
    Mixed: number;
};
export class LanguageServiceShimHostAdapter {
    constructor(shimHost: any);
    shimHost: any;
    loggingEnabled: any;
    tracingEnabled: any;
    resolveModuleNames: any;
    directoryExists: any;
    resolveTypeReferenceDirectives: any;
    error(s: any): void;
    fileExists(path: any): any;
    getCancellationToken(): any;
    getCompilationSettings(): any;
    getCurrentDirectory(): any;
    getDefaultLibFileName(options: any): any;
    getDirectories(path: any): any;
    getLocalizedDiagnosticMessages(): any;
    getProjectVersion(): any;
    getScriptFileNames(): any;
    getScriptKind(fileName: any): any;
    getScriptSnapshot(fileName: any): any;
    getScriptVersion(fileName: any): any;
    getTypeRootsVersion(): any;
    log(s: any): void;
    readDirectory(path: any, extensions: any, exclude: any, include: any, depth: any): any;
    readFile(path: any, encoding: any): any;
    trace(s: any): void;
    useCaseSensitiveFileNames(): any;
}
export const LanguageVariant: {
    "0": string;
    "1": string;
    JSX: number;
    Standard: number;
};
export const ListFormat: {
    "0": string;
    "1": string;
    "1024": string;
    "1048576": string;
    "128": string;
    "129": string;
    "131072": string;
    "131073": string;
    "145": string;
    "15360": string;
    "16": string;
    "16384": string;
    "163969": string;
    "18960": string;
    "2": string;
    "2048": string;
    "256": string;
    "2576": string;
    "262144": string;
    "262656": string;
    "3": string;
    "32": string;
    "32768": string;
    "32897": string;
    "33": string;
    "4": string;
    "4096": string;
    "49152": string;
    "49153": string;
    "512": string;
    "516": string;
    "520": string;
    "524288": string;
    "524880": string;
    "525136": string;
    "526226": string;
    "528": string;
    "53776": string;
    "60": string;
    "64": string;
    "65536": string;
    "768": string;
    "8": string;
    "8192": string;
    "8848": string;
    "8914": string;
    AllowTrailingComma: number;
    AmpersandDelimited: number;
    AngleBrackets: number;
    ArrayBindingPatternElements: number;
    ArrayLiteralExpressionElements: number;
    AsteriskDelimited: number;
    BarDelimited: number;
    Braces: number;
    BracketsMask: number;
    CallExpressionArguments: number;
    CaseBlockClauses: number;
    CaseOrDefaultClauseStatements: number;
    ClassHeritageClauses: number;
    ClassMembers: number;
    CommaDelimited: number;
    CommaListElements: number;
    Decorators: number;
    DelimitersMask: number;
    EnumMembers: number;
    HeritageClauseTypes: number;
    HeritageClauses: number;
    Indented: number;
    IndexSignatureParameters: number;
    InterfaceMembers: number;
    IntersectionTypeConstituents: number;
    JSDocComment: number;
    JsxElementAttributes: number;
    JsxElementOrFragmentChildren: number;
    LinesMask: number;
    Modifiers: number;
    MultiLine: number;
    MultiLineBlockStatements: number;
    MultiLineFunctionBodyStatements: number;
    MultiLineTypeLiteralMembers: number;
    NamedImportsOrExportsElements: number;
    NewExpressionArguments: number;
    NoInterveningComments: number;
    NoSpaceIfEmpty: number;
    NoTrailingNewLine: number;
    None: number;
    NotDelimited: number;
    ObjectBindingPatternElements: number;
    ObjectLiteralExpressionProperties: number;
    Optional: number;
    OptionalIfEmpty: number;
    OptionalIfUndefined: number;
    Parameters: number;
    Parenthesis: number;
    PreferNewLine: number;
    PreserveLines: number;
    SingleElement: number;
    SingleLine: number;
    SingleLineBlockStatements: number;
    SingleLineFunctionBodyStatements: number;
    SingleLineTypeLiteralMembers: number;
    SourceFileStatements: number;
    SpaceBetweenBraces: number;
    SpaceBetweenSiblings: number;
    SquareBrackets: number;
    TemplateExpressionSpans: number;
    TupleTypeElements: number;
    TypeArguments: number;
    TypeParameters: number;
    UnionTypeConstituents: number;
    VariableDeclarationList: number;
};
export class MapCtr {
    clear(): any;
    entries(): any;
    forEach(p0: any): any;
    get(p0: any): any;
    has(p0: any): any;
    keys(): any;
    set(p0: any, p1: any): any;
    values(): any;
}
export const ModifierFlags: {
    "0": string;
    "1": string;
    "128": string;
    "16": string;
    "2": string;
    "2048": string;
    "2270": string;
    "24": string;
    "256": string;
    "28": string;
    "3071": string;
    "32": string;
    "4": string;
    "512": string;
    "513": string;
    "536870912": string;
    "64": string;
    "8": string;
    "92": string;
    Abstract: number;
    AccessibilityModifier: number;
    All: number;
    Ambient: number;
    Async: number;
    Const: number;
    Default: number;
    Export: number;
    ExportDefault: number;
    HasComputedFlags: number;
    NonPublicAccessibilityModifier: number;
    None: number;
    ParameterPropertyModifier: number;
    Private: number;
    Protected: number;
    Public: number;
    Readonly: number;
    Static: number;
    TypeScriptModifier: number;
};
export const ModuleInstanceState: {
    "0": string;
    "1": string;
    "2": string;
    ConstEnumOnly: number;
    Instantiated: number;
    NonInstantiated: number;
};
export const ModuleKind: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    AMD: number;
    CommonJS: number;
    ES2015: number;
    ESNext: number;
    None: number;
    System: number;
    UMD: number;
};
export const ModuleResolutionKind: {
    "1": string;
    "2": string;
    Classic: number;
    NodeJs: number;
};
export namespace NavigateTo {
    function getNavigateToItems(sourceFiles: any, checker: any, cancellationToken: any, searchValue: any, maxResultCount: any, excludeDtsFiles: any): any;
}
export namespace NavigationBar {
    function getNavigationBarItems(sourceFile: any, cancellationToken: any): any;
    function getNavigationTree(sourceFile: any, cancellationToken: any): any;
}
export const NewLineKind: {
    "0": string;
    "1": string;
    CarriageReturnLineFeed: number;
    LineFeed: number;
};
export const NodeBuilderFlags: {
    "0": string;
    "1": string;
    "1024": string;
    "1048576": string;
    "128": string;
    "131072": string;
    "134217728": string;
    "16": string;
    "16384": string;
    "16777216": string;
    "2": string;
    "2048": string;
    "2097152": string;
    "256": string;
    "262144": string;
    "32": string;
    "32768": string;
    "33554432": string;
    "4": string;
    "4096": string;
    "4194304": string;
    "512": string;
    "524288": string;
    "64": string;
    "65536": string;
    "67108864": string;
    "70221824": string;
    "8": string;
    "8192": string;
    "8388608": string;
    AllowAnonymousIdentifier: number;
    AllowEmptyIndexInfoType: number;
    AllowEmptyTuple: number;
    AllowEmptyUnionOrIntersection: number;
    AllowNodeModulesRelativePaths: number;
    AllowQualifedNameInPlaceOfIdentifier: number;
    AllowThisInObjectLiteral: number;
    AllowUniqueESSymbolType: number;
    DoNotIncludeSymbolChain: number;
    ForbidIndexedAccessSymbolReferences: number;
    GenerateNamesForShadowedTypeParams: number;
    IgnoreErrors: number;
    InInitialEntityName: number;
    InObjectTypeLiteral: number;
    InReverseMappedType: number;
    InTypeAlias: number;
    MultilineObjectLiterals: number;
    NoTruncation: number;
    None: number;
    OmitParameterModifiers: number;
    SuppressAnyReturnType: number;
    UseAliasDefinedOutsideCurrentScope: number;
    UseFullyQualifiedType: number;
    UseOnlyExternalAliasing: number;
    UseStructuralFallback: number;
    UseTypeOfFunction: number;
    WriteArrayAsGenericType: number;
    WriteClassExpressionAsTypeLiteral: number;
    WriteTypeArgumentsOfSignature: number;
    WriteTypeParametersInQualifiedName: number;
};
export const NodeCheckFlags: {
    "1": string;
    "1024": string;
    "1048576": string;
    "131072": string;
    "16384": string;
    "16777216": string;
    "2": string;
    "2048": string;
    "2097152": string;
    "256": string;
    "262144": string;
    "32768": string;
    "33554432": string;
    "4": string;
    "4096": string;
    "4194304": string;
    "512": string;
    "524288": string;
    "65536": string;
    "8": string;
    "8192": string;
    "8388608": string;
    AssignmentsMarked: number;
    AsyncMethodWithSuper: number;
    AsyncMethodWithSuperBinding: number;
    BlockScopedBindingInLoop: number;
    BodyScopedClassBinding: number;
    CaptureArguments: number;
    CaptureNewTarget: number;
    CaptureThis: number;
    CapturedBlockScopedBinding: number;
    ClassWithBodyScopedClassBinding: number;
    ClassWithConstructorReference: number;
    ConstructorReferenceInClass: number;
    ContainsCapturedBlockScopeBinding: number;
    ContextChecked: number;
    EnumValuesComputed: number;
    LexicalModuleMergesWithClass: number;
    LexicalThis: number;
    LoopWithCapturedBlockScopedBinding: number;
    NeedsLoopOutParameter: number;
    SuperInstance: number;
    SuperStatic: number;
    TypeChecked: number;
};
export const NodeFlags: {
    "0": string;
    "1": string;
    "1024": string;
    "1048576": string;
    "12679168": string;
    "128": string;
    "131072": string;
    "1408": string;
    "1572864": string;
    "16": string;
    "16384": string;
    "16777216": string;
    "2": string;
    "2048": string;
    "20480": string;
    "2097152": string;
    "256": string;
    "262144": string;
    "3": string;
    "32": string;
    "32768": string;
    "384": string;
    "4": string;
    "4096": string;
    "4194304": string;
    "512": string;
    "524288": string;
    "64": string;
    "65536": string;
    "8": string;
    "8192": string;
    "8388608": string;
    Ambient: number;
    AwaitContext: number;
    BlockScoped: number;
    Const: number;
    ContainsThis: number;
    ContextFlags: number;
    DecoratorContext: number;
    DisallowInContext: number;
    ExportContext: number;
    GlobalAugmentation: number;
    HasAggregatedChildData: number;
    HasAsyncFunctions: number;
    HasExplicitReturn: number;
    HasImplicitReturn: number;
    InWithStatement: number;
    JSDoc: number;
    JavaScriptFile: number;
    JsonFile: number;
    Let: number;
    Namespace: number;
    NestedNamespace: number;
    None: number;
    PermanentlySetIncrementalFlags: number;
    PossiblyContainsDynamicImport: number;
    PossiblyContainsImportMeta: number;
    ReachabilityAndEmitFlags: number;
    ReachabilityCheckFlags: number;
    Synthesized: number;
    ThisNodeHasError: number;
    ThisNodeOrAnySubNodesHasError: number;
    TypeExcludesFlags: number;
    YieldContext: number;
};
export class NodeMap {
    map: any;
    forEach(cb: any): void;
    get(node: any): any;
    getOrUpdate(node: any, setValue: any): any;
    has(node: any): any;
    set(node: any, value: any): void;
}
export class NodeSet {
    map: any;
    add(node: any): void;
    forEach(cb: any): void;
    has(node: any): any;
    some(pred: any): any;
    tryAdd(node: any): any;
}
export const ObjectFlags: {
    "1": string;
    "1024": string;
    "128": string;
    "16": string;
    "16384": string;
    "2": string;
    "2048": string;
    "256": string;
    "3": string;
    "32": string;
    "32768": string;
    "4": string;
    "4096": string;
    "512": string;
    "64": string;
    "8": string;
    "8192": string;
    Anonymous: number;
    Class: number;
    ClassOrInterface: number;
    ContainsSpread: number;
    EvolvingArray: number;
    FreshLiteral: number;
    Instantiated: number;
    Interface: number;
    JSLiteral: number;
    JsxAttributes: number;
    Mapped: number;
    MarkerType: number;
    ObjectLiteral: number;
    ObjectLiteralPatternWithComputedProperties: number;
    Reference: number;
    ReverseMapped: number;
    Tuple: number;
};
export function OperationCanceledException(): void;
export namespace OrganizeImports {
    function coalesceExports(exportGroup: any): any;
    function coalesceImports(importGroup: any): any;
    function compareModuleSpecifiers(m1: any, m2: any): any;
    function organizeImports(sourceFile: any, formatContext: any, host: any, program: any, _preferences: any): any;
}
export const OuterExpressionKinds: {
    "1": string;
    "2": string;
    "4": string;
    "7": string;
    All: number;
    Assertions: number;
    Parentheses: number;
    PartiallyEmittedExpressions: number;
};
export namespace OutliningElementsCollector {
    function collectElements(sourceFile: any, cancellationToken: any): any;
}
export const OutliningSpanKind: {
    Code: string;
    Comment: string;
    Imports: string;
    Region: string;
};
export const OutputFileType: {
    "0": string;
    "1": string;
    "2": string;
    Declaration: number;
    JavaScript: number;
    SourceMap: number;
};
export const PatternMatchKind: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    camelCase: number;
    exact: number;
    prefix: number;
    substring: number;
};
export const PollingInterval: {
    "2000": string;
    "250": string;
    "500": string;
    High: number;
    Low: number;
    Medium: number;
};
export const PragmaKindFlags: {
    "0": string;
    "1": string;
    "2": string;
    "4": string;
    "7": string;
    All: number;
    Default: number;
    MultiLine: number;
    None: number;
    SingleLine: number;
    TripleSlashXML: number;
};
export const QuotePreference: {
    "0": string;
    "1": string;
    Double: number;
    Single: number;
};
export const RelationComparisonResult: {
    "1": string;
    "2": string;
    "3": string;
    Failed: number;
    FailedAndReported: number;
    Succeeded: number;
};
export namespace Rename {
    function getRenameInfo(program: any, sourceFile: any, position: any, options: any): any;
}
export const ScriptElementKind: {
    alias: string;
    callSignatureElement: string;
    classElement: string;
    constElement: string;
    constructSignatureElement: string;
    constructorImplementationElement: string;
    directory: string;
    enumElement: string;
    enumMemberElement: string;
    externalModuleName: string;
    functionElement: string;
    indexSignatureElement: string;
    interfaceElement: string;
    jsxAttribute: string;
    keyword: string;
    label: string;
    letElement: string;
    localClassElement: string;
    localFunctionElement: string;
    localVariableElement: string;
    memberFunctionElement: string;
    memberGetAccessorElement: string;
    memberSetAccessorElement: string;
    memberVariableElement: string;
    moduleElement: string;
    parameterElement: string;
    primitiveType: string;
    scriptElement: string;
    string: string;
    typeElement: string;
    typeParameterElement: string;
    unknown: string;
    variableElement: string;
    warning: string;
};
export const ScriptElementKindModifier: {
    abstractModifier: string;
    ambientModifier: string;
    dtsModifier: string;
    exportedModifier: string;
    jsModifier: string;
    jsonModifier: string;
    jsxModifier: string;
    none: string;
    optionalModifier: string;
    privateMemberModifier: string;
    protectedMemberModifier: string;
    publicMemberModifier: string;
    staticModifier: string;
    tsModifier: string;
    tsxModifier: string;
};
export const ScriptKind: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    Deferred: number;
    External: number;
    JS: number;
    JSON: number;
    JSX: number;
    TS: number;
    TSX: number;
    Unknown: number;
};
export namespace ScriptSnapshot {
    function fromString(text: any): any;
}
export const ScriptTarget: {
    "0": string;
    "1": string;
    "100": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    ES2015: number;
    ES2016: number;
    ES2017: number;
    ES2018: number;
    ES3: number;
    ES5: number;
    ESNext: number;
    JSON: number;
    Latest: number;
};
export const SemanticMeaning: {
    "0": string;
    "1": string;
    "2": string;
    "4": string;
    "7": string;
    All: number;
    Namespace: number;
    None: number;
    Type: number;
    Value: number;
};
export namespace SignatureHelp {
    function getArgumentInfoForCompletions(node: any, position: any, sourceFile: any): any;
    function getSignatureHelpItems(program: any, sourceFile: any, position: any, triggerReason: any, cancellationToken: any): any;
}
export const SignatureKind: {
    "0": string;
    "1": string;
    Call: number;
    Construct: number;
};
export const StructureIsReused: {
    "0": string;
    "1": string;
    "2": string;
    Completely: number;
    Not: number;
    SafeModules: number;
};
export const SymbolAccessibility: {
    "0": string;
    "1": string;
    "2": string;
    Accessible: number;
    CannotBeNamed: number;
    NotAccessible: number;
};
export namespace SymbolDisplay {
    function getSymbolDisplayPartsDocumentationAndSymbolKind(typeChecker: any, symbol: any, sourceFile: any, enclosingDeclaration: any, location: any, semanticMeaning: any, alias: any): any;
    function getSymbolKind(typeChecker: any, symbol: any, location: any): any;
    function getSymbolModifiers(symbol: any): any;
}
export const SymbolDisplayPartKind: {
    "0": string;
    "1": string;
    "10": string;
    "11": string;
    "12": string;
    "13": string;
    "14": string;
    "15": string;
    "16": string;
    "17": string;
    "18": string;
    "19": string;
    "2": string;
    "20": string;
    "21": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    aliasName: number;
    className: number;
    enumMemberName: number;
    enumName: number;
    fieldName: number;
    functionName: number;
    interfaceName: number;
    keyword: number;
    lineBreak: number;
    localName: number;
    methodName: number;
    moduleName: number;
    numericLiteral: number;
    operator: number;
    parameterName: number;
    propertyName: number;
    punctuation: number;
    regularExpressionLiteral: number;
    space: number;
    stringLiteral: number;
    text: number;
    typeParameterName: number;
};
export const SymbolFlags: {
    "0": string;
    "1": string;
    "1024": string;
    "1048576": string;
    "106500": string;
    "110735": string;
    "128": string;
    "131072": string;
    "134217728": string;
    "1536": string;
    "16": string;
    "16384": string;
    "16777216": string;
    "1920": string;
    "2": string;
    "2048": string;
    "2097152": string;
    "256": string;
    "262144": string;
    "2623475": string;
    "2885600": string;
    "3": string;
    "32": string;
    "32768": string;
    "33554432": string;
    "384": string;
    "4": string;
    "4096": string;
    "418": string;
    "4194304": string;
    "512": string;
    "524288": string;
    "6240": string;
    "64": string;
    "65536": string;
    "67108863": string;
    "67108864": string;
    "67154879": string;
    "67187647": string;
    "67212223": string;
    "67219887": string;
    "67220414": string;
    "67220415": string;
    "67635688": string;
    "67897736": string;
    "67897832": string;
    "68008191": string;
    "68008383": string;
    "68008831": string;
    "68008959": string;
    "8": string;
    "8192": string;
    "8388608": string;
    "944": string;
    "98304": string;
    "98308": string;
    Accessor: number;
    Alias: number;
    AliasExcludes: number;
    All: number;
    Assignment: number;
    BlockScoped: number;
    BlockScopedVariable: number;
    BlockScopedVariableExcludes: number;
    Class: number;
    ClassExcludes: number;
    ClassMember: number;
    Classifiable: number;
    ConstEnum: number;
    ConstEnumExcludes: number;
    Constructor: number;
    Enum: number;
    EnumMember: number;
    EnumMemberExcludes: number;
    ExportHasLocal: number;
    ExportStar: number;
    ExportValue: number;
    Function: number;
    FunctionExcludes: number;
    FunctionScopedVariable: number;
    FunctionScopedVariableExcludes: number;
    GetAccessor: number;
    GetAccessorExcludes: number;
    Interface: number;
    InterfaceExcludes: number;
    LateBindingContainer: number;
    Method: number;
    MethodExcludes: number;
    Module: number;
    ModuleExports: number;
    ModuleMember: number;
    Namespace: number;
    NamespaceModule: number;
    NamespaceModuleExcludes: number;
    None: number;
    ObjectLiteral: number;
    Optional: number;
    ParameterExcludes: number;
    Property: number;
    PropertyExcludes: number;
    PropertyOrAccessor: number;
    Prototype: number;
    RegularEnum: number;
    RegularEnumExcludes: number;
    SetAccessor: number;
    SetAccessorExcludes: number;
    Signature: number;
    Transient: number;
    Type: number;
    TypeAlias: number;
    TypeAliasExcludes: number;
    TypeLiteral: number;
    TypeParameter: number;
    TypeParameterExcludes: number;
    Value: number;
    ValueModule: number;
    ValueModuleExcludes: number;
    Variable: number;
};
export const SymbolFormatFlags: {
    "0": string;
    "1": string;
    "16": string;
    "2": string;
    "4": string;
    "8": string;
    AllowAnyNodeKind: number;
    DoNotIncludeSymbolChain: number;
    None: number;
    UseAliasDefinedOutsideCurrentScope: number;
    UseOnlyExternalAliasing: number;
    WriteTypeParametersOrArguments: number;
};
export const SyntaxKind: {
    "0": string;
    "1": string;
    "10": string;
    "100": string;
    "101": string;
    "102": string;
    "103": string;
    "104": string;
    "105": string;
    "106": string;
    "107": string;
    "108": string;
    "109": string;
    "11": string;
    "110": string;
    "111": string;
    "112": string;
    "113": string;
    "114": string;
    "115": string;
    "116": string;
    "117": string;
    "118": string;
    "119": string;
    "12": string;
    "120": string;
    "121": string;
    "122": string;
    "123": string;
    "124": string;
    "125": string;
    "126": string;
    "127": string;
    "128": string;
    "129": string;
    "13": string;
    "130": string;
    "131": string;
    "132": string;
    "133": string;
    "134": string;
    "135": string;
    "136": string;
    "137": string;
    "138": string;
    "139": string;
    "14": string;
    "140": string;
    "141": string;
    "142": string;
    "143": string;
    "144": string;
    "145": string;
    "146": string;
    "147": string;
    "148": string;
    "149": string;
    "15": string;
    "150": string;
    "151": string;
    "152": string;
    "153": string;
    "154": string;
    "155": string;
    "156": string;
    "157": string;
    "158": string;
    "159": string;
    "16": string;
    "160": string;
    "161": string;
    "162": string;
    "163": string;
    "164": string;
    "165": string;
    "166": string;
    "167": string;
    "168": string;
    "169": string;
    "17": string;
    "170": string;
    "171": string;
    "172": string;
    "173": string;
    "174": string;
    "175": string;
    "176": string;
    "177": string;
    "178": string;
    "179": string;
    "18": string;
    "180": string;
    "181": string;
    "182": string;
    "183": string;
    "184": string;
    "185": string;
    "186": string;
    "187": string;
    "188": string;
    "189": string;
    "19": string;
    "190": string;
    "191": string;
    "192": string;
    "193": string;
    "194": string;
    "195": string;
    "196": string;
    "197": string;
    "198": string;
    "199": string;
    "2": string;
    "20": string;
    "200": string;
    "201": string;
    "202": string;
    "203": string;
    "204": string;
    "205": string;
    "206": string;
    "207": string;
    "208": string;
    "209": string;
    "21": string;
    "210": string;
    "211": string;
    "212": string;
    "213": string;
    "214": string;
    "215": string;
    "216": string;
    "217": string;
    "218": string;
    "219": string;
    "22": string;
    "220": string;
    "221": string;
    "222": string;
    "223": string;
    "224": string;
    "225": string;
    "226": string;
    "227": string;
    "228": string;
    "229": string;
    "23": string;
    "230": string;
    "231": string;
    "232": string;
    "233": string;
    "234": string;
    "235": string;
    "236": string;
    "237": string;
    "238": string;
    "239": string;
    "24": string;
    "240": string;
    "241": string;
    "242": string;
    "243": string;
    "244": string;
    "245": string;
    "246": string;
    "247": string;
    "248": string;
    "249": string;
    "25": string;
    "250": string;
    "251": string;
    "252": string;
    "253": string;
    "254": string;
    "255": string;
    "256": string;
    "257": string;
    "258": string;
    "259": string;
    "26": string;
    "260": string;
    "261": string;
    "262": string;
    "263": string;
    "264": string;
    "265": string;
    "266": string;
    "267": string;
    "268": string;
    "269": string;
    "27": string;
    "270": string;
    "271": string;
    "272": string;
    "273": string;
    "274": string;
    "275": string;
    "276": string;
    "277": string;
    "278": string;
    "279": string;
    "28": string;
    "280": string;
    "281": string;
    "282": string;
    "283": string;
    "284": string;
    "285": string;
    "286": string;
    "287": string;
    "288": string;
    "289": string;
    "29": string;
    "290": string;
    "291": string;
    "292": string;
    "293": string;
    "294": string;
    "295": string;
    "296": string;
    "297": string;
    "298": string;
    "299": string;
    "3": string;
    "30": string;
    "300": string;
    "301": string;
    "302": string;
    "303": string;
    "304": string;
    "305": string;
    "306": string;
    "307": string;
    "308": string;
    "309": string;
    "31": string;
    "310": string;
    "311": string;
    "312": string;
    "32": string;
    "33": string;
    "34": string;
    "35": string;
    "36": string;
    "37": string;
    "38": string;
    "39": string;
    "4": string;
    "40": string;
    "41": string;
    "42": string;
    "43": string;
    "44": string;
    "45": string;
    "46": string;
    "47": string;
    "48": string;
    "49": string;
    "5": string;
    "50": string;
    "51": string;
    "52": string;
    "53": string;
    "54": string;
    "55": string;
    "56": string;
    "57": string;
    "58": string;
    "59": string;
    "6": string;
    "60": string;
    "61": string;
    "62": string;
    "63": string;
    "64": string;
    "65": string;
    "66": string;
    "67": string;
    "68": string;
    "69": string;
    "7": string;
    "70": string;
    "71": string;
    "72": string;
    "73": string;
    "74": string;
    "75": string;
    "76": string;
    "77": string;
    "78": string;
    "79": string;
    "8": string;
    "80": string;
    "81": string;
    "82": string;
    "83": string;
    "84": string;
    "85": string;
    "86": string;
    "87": string;
    "88": string;
    "89": string;
    "9": string;
    "90": string;
    "91": string;
    "92": string;
    "93": string;
    "94": string;
    "95": string;
    "96": string;
    "97": string;
    "98": string;
    "99": string;
    AbstractKeyword: number;
    AmpersandAmpersandToken: number;
    AmpersandEqualsToken: number;
    AmpersandToken: number;
    AnyKeyword: number;
    ArrayBindingPattern: number;
    ArrayLiteralExpression: number;
    ArrayType: number;
    ArrowFunction: number;
    AsExpression: number;
    AsKeyword: number;
    AsteriskAsteriskEqualsToken: number;
    AsteriskAsteriskToken: number;
    AsteriskEqualsToken: number;
    AsteriskToken: number;
    AsyncKeyword: number;
    AtToken: number;
    AwaitExpression: number;
    AwaitKeyword: number;
    BarBarToken: number;
    BarEqualsToken: number;
    BarToken: number;
    BigIntKeyword: number;
    BigIntLiteral: number;
    BinaryExpression: number;
    BindingElement: number;
    Block: number;
    BooleanKeyword: number;
    BreakKeyword: number;
    BreakStatement: number;
    Bundle: number;
    CallExpression: number;
    CallSignature: number;
    CaretEqualsToken: number;
    CaretToken: number;
    CaseBlock: number;
    CaseClause: number;
    CaseKeyword: number;
    CatchClause: number;
    CatchKeyword: number;
    ClassDeclaration: number;
    ClassExpression: number;
    ClassKeyword: number;
    CloseBraceToken: number;
    CloseBracketToken: number;
    CloseParenToken: number;
    ColonToken: number;
    CommaListExpression: number;
    CommaToken: number;
    ComputedPropertyName: number;
    ConditionalExpression: number;
    ConditionalType: number;
    ConflictMarkerTrivia: number;
    ConstKeyword: number;
    ConstructSignature: number;
    Constructor: number;
    ConstructorKeyword: number;
    ConstructorType: number;
    ContinueKeyword: number;
    ContinueStatement: number;
    Count: number;
    DebuggerKeyword: number;
    DebuggerStatement: number;
    DeclareKeyword: number;
    Decorator: number;
    DefaultClause: number;
    DefaultKeyword: number;
    DeleteExpression: number;
    DeleteKeyword: number;
    DoKeyword: number;
    DoStatement: number;
    DotDotDotToken: number;
    DotToken: number;
    ElementAccessExpression: number;
    ElseKeyword: number;
    EmptyStatement: number;
    EndOfDeclarationMarker: number;
    EndOfFileToken: number;
    EnumDeclaration: number;
    EnumKeyword: number;
    EnumMember: number;
    EqualsEqualsEqualsToken: number;
    EqualsEqualsToken: number;
    EqualsGreaterThanToken: number;
    EqualsToken: number;
    ExclamationEqualsEqualsToken: number;
    ExclamationEqualsToken: number;
    ExclamationToken: number;
    ExportAssignment: number;
    ExportDeclaration: number;
    ExportKeyword: number;
    ExportSpecifier: number;
    ExpressionStatement: number;
    ExpressionWithTypeArguments: number;
    ExtendsKeyword: number;
    ExternalModuleReference: number;
    FalseKeyword: number;
    FinallyKeyword: number;
    FirstAssignment: number;
    FirstBinaryOperator: number;
    FirstCompoundAssignment: number;
    FirstContextualKeyword: number;
    FirstFutureReservedWord: number;
    FirstJSDocNode: number;
    FirstJSDocTagNode: number;
    FirstKeyword: number;
    FirstLiteralToken: number;
    FirstNode: number;
    FirstPunctuation: number;
    FirstReservedWord: number;
    FirstTemplateToken: number;
    FirstToken: number;
    FirstTriviaToken: number;
    FirstTypeNode: number;
    ForInStatement: number;
    ForKeyword: number;
    ForOfStatement: number;
    ForStatement: number;
    FromKeyword: number;
    FunctionDeclaration: number;
    FunctionExpression: number;
    FunctionKeyword: number;
    FunctionType: number;
    GetAccessor: number;
    GetKeyword: number;
    GlobalKeyword: number;
    GreaterThanEqualsToken: number;
    GreaterThanGreaterThanEqualsToken: number;
    GreaterThanGreaterThanGreaterThanEqualsToken: number;
    GreaterThanGreaterThanGreaterThanToken: number;
    GreaterThanGreaterThanToken: number;
    GreaterThanToken: number;
    HeritageClause: number;
    Identifier: number;
    IfKeyword: number;
    IfStatement: number;
    ImplementsKeyword: number;
    ImportClause: number;
    ImportDeclaration: number;
    ImportEqualsDeclaration: number;
    ImportKeyword: number;
    ImportSpecifier: number;
    ImportType: number;
    InKeyword: number;
    IndexSignature: number;
    IndexedAccessType: number;
    InferKeyword: number;
    InferType: number;
    InputFiles: number;
    InstanceOfKeyword: number;
    InterfaceDeclaration: number;
    InterfaceKeyword: number;
    IntersectionType: number;
    IsKeyword: number;
    JSDocAllType: number;
    JSDocAugmentsTag: number;
    JSDocCallbackTag: number;
    JSDocClassTag: number;
    JSDocComment: number;
    JSDocEnumTag: number;
    JSDocFunctionType: number;
    JSDocNonNullableType: number;
    JSDocNullableType: number;
    JSDocOptionalType: number;
    JSDocParameterTag: number;
    JSDocPropertyTag: number;
    JSDocReturnTag: number;
    JSDocSignature: number;
    JSDocTag: number;
    JSDocTemplateTag: number;
    JSDocThisTag: number;
    JSDocTypeExpression: number;
    JSDocTypeLiteral: number;
    JSDocTypeTag: number;
    JSDocTypedefTag: number;
    JSDocUnknownType: number;
    JSDocVariadicType: number;
    JsxAttribute: number;
    JsxAttributes: number;
    JsxClosingElement: number;
    JsxClosingFragment: number;
    JsxElement: number;
    JsxExpression: number;
    JsxFragment: number;
    JsxOpeningElement: number;
    JsxOpeningFragment: number;
    JsxSelfClosingElement: number;
    JsxSpreadAttribute: number;
    JsxText: number;
    JsxTextAllWhiteSpaces: number;
    KeyOfKeyword: number;
    LabeledStatement: number;
    LastAssignment: number;
    LastBinaryOperator: number;
    LastCompoundAssignment: number;
    LastContextualKeyword: number;
    LastFutureReservedWord: number;
    LastJSDocNode: number;
    LastJSDocTagNode: number;
    LastKeyword: number;
    LastLiteralToken: number;
    LastPunctuation: number;
    LastReservedWord: number;
    LastTemplateToken: number;
    LastToken: number;
    LastTriviaToken: number;
    LastTypeNode: number;
    LessThanEqualsToken: number;
    LessThanLessThanEqualsToken: number;
    LessThanLessThanToken: number;
    LessThanSlashToken: number;
    LessThanToken: number;
    LetKeyword: number;
    LiteralType: number;
    MappedType: number;
    MergeDeclarationMarker: number;
    MetaProperty: number;
    MethodDeclaration: number;
    MethodSignature: number;
    MinusEqualsToken: number;
    MinusMinusToken: number;
    MinusToken: number;
    MissingDeclaration: number;
    ModuleBlock: number;
    ModuleDeclaration: number;
    ModuleKeyword: number;
    MultiLineCommentTrivia: number;
    NamedExports: number;
    NamedImports: number;
    NamespaceExportDeclaration: number;
    NamespaceImport: number;
    NamespaceKeyword: number;
    NeverKeyword: number;
    NewExpression: number;
    NewKeyword: number;
    NewLineTrivia: number;
    NoSubstitutionTemplateLiteral: number;
    NonNullExpression: number;
    NotEmittedStatement: number;
    NullKeyword: number;
    NumberKeyword: number;
    NumericLiteral: number;
    ObjectBindingPattern: number;
    ObjectKeyword: number;
    ObjectLiteralExpression: number;
    OfKeyword: number;
    OmittedExpression: number;
    OpenBraceToken: number;
    OpenBracketToken: number;
    OpenParenToken: number;
    OptionalType: number;
    PackageKeyword: number;
    Parameter: number;
    ParenthesizedExpression: number;
    ParenthesizedType: number;
    PartiallyEmittedExpression: number;
    PercentEqualsToken: number;
    PercentToken: number;
    PlusEqualsToken: number;
    PlusPlusToken: number;
    PlusToken: number;
    PostfixUnaryExpression: number;
    PrefixUnaryExpression: number;
    PrivateKeyword: number;
    PropertyAccessExpression: number;
    PropertyAssignment: number;
    PropertyDeclaration: number;
    PropertySignature: number;
    ProtectedKeyword: number;
    PublicKeyword: number;
    QualifiedName: number;
    QuestionToken: number;
    ReadonlyKeyword: number;
    RegularExpressionLiteral: number;
    RequireKeyword: number;
    RestType: number;
    ReturnKeyword: number;
    ReturnStatement: number;
    SemicolonClassElement: number;
    SemicolonToken: number;
    SetAccessor: number;
    SetKeyword: number;
    ShebangTrivia: number;
    ShorthandPropertyAssignment: number;
    SingleLineCommentTrivia: number;
    SlashEqualsToken: number;
    SlashToken: number;
    SourceFile: number;
    SpreadAssignment: number;
    SpreadElement: number;
    StaticKeyword: number;
    StringKeyword: number;
    StringLiteral: number;
    SuperKeyword: number;
    SwitchKeyword: number;
    SwitchStatement: number;
    SymbolKeyword: number;
    SyntaxList: number;
    SyntheticExpression: number;
    TaggedTemplateExpression: number;
    TemplateExpression: number;
    TemplateHead: number;
    TemplateMiddle: number;
    TemplateSpan: number;
    TemplateTail: number;
    ThisKeyword: number;
    ThisType: number;
    ThrowKeyword: number;
    ThrowStatement: number;
    TildeToken: number;
    TrueKeyword: number;
    TryKeyword: number;
    TryStatement: number;
    TupleType: number;
    TypeAliasDeclaration: number;
    TypeAssertionExpression: number;
    TypeKeyword: number;
    TypeLiteral: number;
    TypeOfExpression: number;
    TypeOfKeyword: number;
    TypeOperator: number;
    TypeParameter: number;
    TypePredicate: number;
    TypeQuery: number;
    TypeReference: number;
    UndefinedKeyword: number;
    UnionType: number;
    UniqueKeyword: number;
    Unknown: number;
    UnknownKeyword: number;
    UnparsedSource: number;
    VarKeyword: number;
    VariableDeclaration: number;
    VariableDeclarationList: number;
    VariableStatement: number;
    VoidExpression: number;
    VoidKeyword: number;
    WhileKeyword: number;
    WhileStatement: number;
    WhitespaceTrivia: number;
    WithKeyword: number;
    WithStatement: number;
    YieldExpression: number;
    YieldKeyword: number;
};
export const SyntheticSymbolKind: {
    "0": string;
    "1": string;
    Spread: number;
    UnionOrIntersection: number;
};
export const Ternary: {
    "-1": string;
    "0": string;
    "1": string;
    False: number;
    Maybe: number;
    True: number;
};
export class ThrottledCancellationToken {
    constructor(hostCancellationToken: any, throttleWaitMilliseconds: any);
    hostCancellationToken: any;
    throttleWaitMilliseconds: any;
    lastCancellationCheckTime: any;
    isCancellationRequested(): any;
    throwIfCancellationRequested(): void;
}
export const TokenClass: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    BigIntLiteral: number;
    Comment: number;
    Identifier: number;
    Keyword: number;
    NumberLiteral: number;
    Operator: number;
    Punctuation: number;
    RegExpLiteral: number;
    StringLiteral: number;
    Whitespace: number;
};
export const TokenFlags: {
    "0": string;
    "1": string;
    "1008": string;
    "128": string;
    "16": string;
    "2": string;
    "256": string;
    "32": string;
    "384": string;
    "4": string;
    "512": string;
    "64": string;
    "8": string;
    BinaryOrOctalSpecifier: number;
    BinarySpecifier: number;
    ContainsSeparator: number;
    ExtendedUnicodeEscape: number;
    HexSpecifier: number;
    None: number;
    NumericLiteralFlags: number;
    Octal: number;
    OctalSpecifier: number;
    PrecedingJSDocComment: number;
    PrecedingLineBreak: number;
    Scientific: number;
    Unterminated: number;
};
export const TransformFlags: {
    "-3": string;
    "0": string;
    "1": string;
    "1024": string;
    "1048576": string;
    "128": string;
    "131072": string;
    "16": string;
    "16384": string;
    "16777216": string;
    "192": string;
    "2": string;
    "2048": string;
    "2097152": string;
    "256": string;
    "262144": string;
    "3": string;
    "3072": string;
    "32": string;
    "32768": string;
    "33554432": string;
    "4": string;
    "4096": string;
    "4194304": string;
    "512": string;
    "524288": string;
    "536870912": string;
    "536872257": string;
    "570426689": string;
    "637535553": string;
    "637666625": string;
    "637797697": string;
    "638121281": string;
    "638358849": string;
    "639894849": string;
    "64": string;
    "647001409": string;
    "653604161": string;
    "653616449": string;
    "653620545": string;
    "65536": string;
    "67108864": string;
    "768": string;
    "8": string;
    "8192": string;
    "81920": string;
    "8388608": string;
    ArrayLiteralOrCallOrNewExcludes: number;
    ArrowFunctionExcludes: number;
    AssertDestructuringAssignment: number;
    AssertES2015: number;
    AssertES2016: number;
    AssertES2017: number;
    AssertESNext: number;
    AssertGenerator: number;
    AssertJsx: number;
    AssertTypeScript: number;
    BindingPatternExcludes: number;
    CatchClauseExcludes: number;
    ClassExcludes: number;
    ConstructorExcludes: number;
    ContainsBindingPattern: number;
    ContainsBlockScopedBinding: number;
    ContainsCapturedLexicalThis: number;
    ContainsComputedPropertyName: number;
    ContainsDefaultValueAssignments: number;
    ContainsDestructuringAssignment: number;
    ContainsDynamicImport: number;
    ContainsES2015: number;
    ContainsES2016: number;
    ContainsES2017: number;
    ContainsESNext: number;
    ContainsGenerator: number;
    ContainsHoistedDeclarationOrCompletion: number;
    ContainsJsx: number;
    ContainsLexicalThis: number;
    ContainsLexicalThisInComputedPropertyName: number;
    ContainsObjectRestOrSpread: number;
    ContainsRestOrSpread: number;
    ContainsSuper: number;
    ContainsTypeScript: number;
    ContainsTypeScriptClassSyntax: number;
    ContainsYield: number;
    DestructuringAssignment: number;
    ES2015: number;
    ES2015FunctionSyntaxMask: number;
    FunctionExcludes: number;
    Generator: number;
    HasComputedFlags: number;
    MethodOrAccessorExcludes: number;
    ModuleExcludes: number;
    NodeExcludes: number;
    None: number;
    ObjectLiteralExcludes: number;
    OuterExpressionExcludes: number;
    ParameterExcludes: number;
    PropertyAccessExcludes: number;
    Super: number;
    TypeExcludes: number;
    TypeScript: number;
    VariableDeclarationListExcludes: number;
};
export const TypeFlags: {
    "1": string;
    "1024": string;
    "1048576": string;
    "1056": string;
    "109440": string;
    "117632": string;
    "117724": string;
    "12288": string;
    "128": string;
    "131068": string;
    "131072": string;
    "132": string;
    "133970943": string;
    "134217728": string;
    "16": string;
    "16384": string;
    "16777216": string;
    "2": string;
    "2048": string;
    "2097152": string;
    "2112": string;
    "256": string;
    "262144": string;
    "268435456": string;
    "2944": string;
    "296": string;
    "3": string;
    "3145728": string;
    "32": string;
    "32768": string;
    "33554432": string;
    "3670016": string;
    "384": string;
    "4": string;
    "402653184": string;
    "4096": string;
    "4194304": string;
    "49152": string;
    "512": string;
    "524288": string;
    "528": string;
    "536870912": string;
    "58982400": string;
    "63176704": string;
    "64": string;
    "65536": string;
    "66846720": string;
    "66994211": string;
    "67108864": string;
    "67238908": string;
    "67359327": string;
    "67637251": string;
    "8": string;
    "8192": string;
    "8388608": string;
    "8576": string;
    "8650752": string;
    "939524096": string;
    "98304": string;
    Any: number;
    AnyOrUnknown: number;
    BigInt: number;
    BigIntLike: number;
    BigIntLiteral: number;
    Boolean: number;
    BooleanLike: number;
    BooleanLiteral: number;
    Conditional: number;
    ConstructionFlags: number;
    ContainsAnyFunctionType: number;
    ContainsObjectLiteral: number;
    ContainsWideningType: number;
    DefinitelyFalsy: number;
    DisjointDomains: number;
    ESSymbol: number;
    ESSymbolLike: number;
    EmptyObject: number;
    Enum: number;
    EnumLike: number;
    EnumLiteral: number;
    GenericMappedType: number;
    Index: number;
    IndexedAccess: number;
    Instantiable: number;
    InstantiableNonPrimitive: number;
    InstantiablePrimitive: number;
    Intersection: number;
    Intrinsic: number;
    Literal: number;
    Narrowable: number;
    Never: number;
    NonPrimitive: number;
    NonWideningType: number;
    NotPrimitiveUnion: number;
    NotUnionOrUnit: number;
    Null: number;
    Nullable: number;
    Number: number;
    NumberLike: number;
    NumberLiteral: number;
    Object: number;
    PossiblyFalsy: number;
    Primitive: number;
    PropagatingFlags: number;
    RequiresWidening: number;
    String: number;
    StringLike: number;
    StringLiteral: number;
    StringOrNumberLiteral: number;
    StringOrNumberLiteralOrUnique: number;
    StructuredOrInstantiable: number;
    StructuredType: number;
    Substitution: number;
    TypeParameter: number;
    TypeVariable: number;
    Undefined: number;
    Union: number;
    UnionOrIntersection: number;
    UniqueESSymbol: number;
    Unit: number;
    Unknown: number;
    Void: number;
    VoidLike: number;
    Wildcard: number;
};
export const TypeFormatFlags: {
    "0": string;
    "1": string;
    "1024": string;
    "1048576": string;
    "131072": string;
    "16384": string;
    "2": string;
    "2048": string;
    "2097152": string;
    "256": string;
    "262144": string;
    "32": string;
    "4096": string;
    "4194304": string;
    "524288": string;
    "64": string;
    "8": string;
    "8192": string;
    "8388608": string;
    "9469291": string;
    AddUndefined: number;
    AllowUniqueESSymbolType: number;
    InArrayType: number;
    InElementType: number;
    InFirstTypeArgument: number;
    InTypeAlias: number;
    MultilineObjectLiterals: number;
    NoTruncation: number;
    NodeBuilderFlagsMask: number;
    None: number;
    OmitParameterModifiers: number;
    SuppressAnyReturnType: number;
    UseAliasDefinedOutsideCurrentScope: number;
    UseFullyQualifiedType: number;
    UseStructuralFallback: number;
    UseTypeOfFunction: number;
    WriteArrayAsGenericType: number;
    WriteArrowStyleSignature: number;
    WriteClassExpressionAsTypeLiteral: number;
    WriteOwnNameForAnyLike: number;
    WriteTypeArgumentsOfSignature: number;
};
export const TypePredicateKind: {
    "0": string;
    "1": string;
    Identifier: number;
    This: number;
};
export const TypeReferenceSerializationKind: {
    "0": string;
    "1": string;
    "10": string;
    "11": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    ArrayLikeType: number;
    BigIntLikeType: number;
    BooleanType: number;
    ESSymbolType: number;
    NumberLikeType: number;
    ObjectType: number;
    Promise: number;
    StringLikeType: number;
    TypeWithCallSignature: number;
    TypeWithConstructSignatureAndValue: number;
    Unknown: number;
    VoidNullableOrNeverType: number;
};
export class TypeScriptServicesFactory {
    close(): void;
    createClassifierShim(logger: any): any;
    createCoreServicesShim(host: any): any;
    createLanguageServiceShim(host: any): any;
    getServicesVersion(): any;
    registerShim(shim: any): void;
    unregisterShim(shim: any): void;
}
export const UnionReduction: {
    "0": string;
    "1": string;
    "2": string;
    Literal: number;
    None: number;
    Subtype: number;
};
export const UpToDateStatusType: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    ComputingUpstream: number;
    ContainerOnly: number;
    OutOfDateWithSelf: number;
    OutOfDateWithUpstream: number;
    OutputMissing: number;
    Unbuildable: number;
    UpToDate: number;
    UpToDateWithUpstreamTypes: number;
    UpstreamBlocked: number;
    UpstreamOutOfDate: number;
};
export const ValueKind: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    Array: number;
    Const: number;
    FunctionOrClass: number;
    Object: number;
};
export const Variance: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    Bivariant: number;
    Contravariant: number;
    Covariant: number;
    Independent: number;
    Invariant: number;
};
export class Version {
    static tryParse(text: any): any;
    constructor(major: any, minor: any, patch: any, prerelease: any, build: any);
    major: any;
    minor: any;
    patch: any;
    prerelease: any;
    build: any;
    compareTo(other: any): any;
    increment(field: any): any;
}
export namespace Version {
    const zero: {
        build: any[];
        compareTo: Function;
        increment: Function;
        major: number;
        minor: number;
        patch: number;
        prerelease: any[];
    };
}
export class VersionRange {
    static tryParse(text: any): any;
    constructor(spec: any);
    test(version: any): any;
}
export const WatchDirectoryFlags: {
    "0": string;
    "1": string;
    None: number;
    Recursive: number;
};
export const WatchLogLevel: {
    "0": string;
    "1": string;
    "2": string;
    None: number;
    TriggerOnly: number;
    Verbose: number;
};
export const WatchType: {
    ConfigFile: string;
    FailedLookupLocations: string;
    MissingFile: string;
    SourceFile: string;
    TypeRoots: string;
    WildcardDirectory: string;
};
export function addCustomPrologue(target: any, source: any, statementOffset: any, visitor: any): any;
export function addEmitFlags(node: any, emitFlags: any): any;
export function addEmitHelper(node: any, helper: any): any;
export function addEmitHelpers(node: any, helpers: any): any;
export function addPrologue(target: any, source: any, ensureUseStrict: any, visitor: any): any;
export function addRange(to: any, from: any, start: any, end: any): any;
export function addStandardPrologue(target: any, source: any, ensureUseStrict: any): any;
export function addStatementsAfterPrologue(to: any, from: any): any;
export function addSyntheticLeadingComment(node: any, kind: any, text: any, hasTrailingNewLine: any): any;
export function addSyntheticTrailingComment(node: any, kind: any, text: any, hasTrailingNewLine: any): any;
export function addToSeen(seen: any, key: any, value: any): any;
export function adjustExtensionPriority(extensionPriority: any, supportedExtensions: any): any;
export namespace advancedAsyncSuperHelper {
    const name: string;
    const scoped: boolean;
    function text(uniqueName: any): any;
}
export function aggregateTransformFlags(node: any): any;
export function and(f: any, g: any): any;
export function append(to: any, value: any): any;
export function appendIfUnique(array: any, toAdd: any, equalityComparer: any): any;
export function arrayFrom(iterator: any, map: any): any;
export function arrayIsEqualTo(array1: any, array2: any, equalityComparer: any): any;
export function arrayIterator(array: any): any;
export function arrayToMap(array: any, makeKey: any, makeValue: any): any;
export function arrayToMultiMap(values: any, makeKey: any, makeValue: any): any;
export function arrayToNumericMap(array: any, makeKey: any, makeValue: any): any;
export function arrayToSet(array: any, makeKey: any): any;
export function arraysEqual(a: any, b: any, equalityComparer: any): any;
export function assertType(_: any): void;
export function assign(t: any, ...args: any[]): any;
export namespace asyncSuperHelper {
    const name: string;
    const scoped: boolean;
    function text(uniqueName: any): any;
}
export function base64decode(host: any, input: any): any;
export function base64encode(host: any, input: any): any;
export function binarySearch(array: any, value: any, keySelector: any, keyComparer: any, offset: any): any;
export function binarySearchKey(array: any, key: any, keySelector: any, keyComparer: any, offset: any): any;
export function bindSourceFile(file: any, options: any): void;
export function breakIntoCharacterSpans(identifier: any): any;
export function breakIntoWordSpans(identifier: any): any;
export const buildOpts: {
    category: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    description: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    name: string;
    shortName: string;
    showInSimplifiedHelpView: boolean;
    type: string;
}[];
export function canJsonReportNoInutFiles(raw: any): any;
export function canProduceDiagnostics(node: any): any;
export function cast(value: any, test: any): any;
export function chain(a: any, b: any, c: any, d: any, e: any, ...args: any[]): any;
export function chainBundle(transformSourceFile: any): any;
export function chainDiagnosticMessages(details: any, message: any, ...args: any[]): any;
export function changeAnyExtension(path: any, ext: any, extensions: any, ignoreCase: any): any;
export function changeCompilerHostLikeToUseCache(host: any, toPath: any, getSourceFile: any): any;
export function changeExtension(path: any, newExtension: any): any;
export function changesAffectModuleResolution(oldOptions: any, newOptions: any): any;
export function childIsDecorated(node: any, parent: any): any;
export function classicNameResolver(moduleName: any, containingFile: any, compilerOptions: any, host: any, cache: any, redirectedReference: any): any;
export function clear(array: any): void;
export function clearMap(map: any, onDeleteValue: any): void;
export function climbPastPropertyAccess(node: any): any;
export function clone(object: any): any;
export function cloneCompilerOptions(options: any): any;
export function cloneMap(map: any): any;
export function cloneMapOrUndefined(map: any): any;
export function closeFileWatcher(watcher: any): void;
export function closeFileWatcherOf(objWithWatcher: any): void;
export namespace codefix {
    function codeFixAll(context: any, errorCodes: any, use: any): any;
    function createCodeFixAction(fixName: any, changes: any, description: any, fixId: any, fixAllDescription: any, command: any): any;
    function createCodeFixActionNoFixId(fixName: any, changes: any, description: any): any;
    function createCombinedCodeActions(changes: any, commands: any): any;
    function createFileTextChanges(fileName: any, textChanges: any): any;
    function createJsonPropertyAssignment(name: any, initializer: any): any;
    function createMethodFromCallExpression(context: any, call: any, methodName: any, inJs: any, makeStatic: any, preferences: any, contextNode: any, ...args: any[]): any;
    function createMissingMemberNodes(classDeclaration: any, possiblyMissingSymbols: any, context: any, preferences: any, out: any): void;
    function eachDiagnostic(_a: any, errorCodes: any, cb: any): void;
    function findJsonProperty(obj: any, name: any): any;
    function forEachExternalModuleToImportFrom(checker: any, from: any, allSourceFiles: any, cb: any): void;
    function getAllFixes(context: any): any;
    function getFixes(context: any): any;
    function getImportCompletionAction(exportedSymbol: any, moduleSymbol: any, sourceFile: any, symbolName: any, host: any, program: any, formatContext: any, position: any, preferences: any): any;
    function getNoopSymbolTrackerWithResolver(context: any): any;
    function getSupportedErrorCodes(): any;
    const importFixId: string;
    function moduleSpecifierToValidIdentifier(moduleSpecifier: any, target: any): any;
    function moduleSymbolToValidIdentifier(moduleSymbol: any, target: any): any;
    function parameterShouldGetTypeFromJSDoc(node: any): any;
    function registerCodeFix(reg: any): void;
    function setJsonCompilerOptionValue(changeTracker: any, configFile: any, optionName: any, optionValue: any): any;
}
export function collapseTextChangeRangesAcrossMultipleVersions(changes: any): any;
export function collectExternalModuleInfo(sourceFile: any, resolver: any, compilerOptions: any): any;
export function combinePaths(path: any, ...args: any[]): any;
export const commentPragmas: {
    "amd-dependency": {
        args: {
            name: any;
        }[];
        kind: number;
    };
    "amd-module": {
        args: {
            name: any;
        }[];
        kind: number;
    };
    jsx: {
        args: {
            name: any;
        }[];
        kind: number;
    };
    reference: {
        args: {
            captureSpan: any;
            name: any;
            optional: any;
        }[];
        kind: number;
    };
    "ts-check": {
        kind: number;
    };
    "ts-nocheck": {
        kind: number;
    };
};
export const commonOptionsWithBuild: {
    category: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    description: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    name: string;
    shortName: string;
    showInSimplifiedHelpView: boolean;
    type: string;
}[];
export const commonPackageFolders: string[];
export function compact(array: any): any;
export function compareBooleans(a: any, b: any): any;
export function compareDataObjects(dst: any, src: any): any;
export function compareDiagnostics(d1: any, d2: any): any;
export function compareDiagnosticsSkipRelatedInformation(d1: any, d2: any): any;
export function compareEmitHelpers(x: any, y: any): any;
export function comparePaths(a: any, b: any, currentDirectory: any, ignoreCase: any): any;
export function comparePathsCaseInsensitive(a: any, b: any): any;
export function comparePathsCaseSensitive(a: any, b: any): any;
export function compareProperties(a: any, b: any, key: any, comparer: any): any;
export function compareStringsCaseInsensitive(a: any, b: any): any;
export function compareStringsCaseSensitive(a: any, b: any): any;
export function compareStringsCaseSensitiveUI(a: any, b: any): any;
export function compareValues(a: any, b: any): any;
export const compileOnSaveCommandLineOption: {
    name: string;
    type: string;
};
export function compilerOptionsAffectSemanticDiagnostics(newOptions: any, oldOptions: any): any;
export function compilerOptionsIndicateEs6Modules(compilerOptions: any): any;
export function compose(a: any, b: any, c: any, d: any, e: any, ...args: any[]): any;
export function computeCommonSourceDirectoryOfFilenames(fileNames: any, currentDirectory: any, getCanonicalFileName: any): any;
export function computeLineAndCharacterOfPosition(lineStarts: any, position: any): any;
export function computeLineStarts(text: any): any;
export function computePositionOfLineAndCharacter(lineStarts: any, line: any, character: any, debugText: any, allowEdits: any): any;
export function computeSuggestionDiagnostics(sourceFile: any, program: any, cancellationToken: any): any;
export function computeTransformFlagsForNode(node: any, subtreeFlags: any): any;
export function concatenate(array1: any, array2: any): any;
export function concatenateDiagnosticMessageChains(headChain: any, tailChain: any): any;
export function contains(array: any, value: any, equalityComparer: any): any;
export function containsParseError(node: any): any;
export function containsPath(parent: any, child: any, currentDirectory: any, ignoreCase: any): any;
export function convertCompilerOptionsForTelemetry(opts: any): any;
export function convertCompilerOptionsFromJson(jsonOptions: any, basePath: any, configFileName: any): any;
export function convertEnableAutoDiscoveryToEnable(typeAcquisition: any): any;
export function convertFunctionDeclarationToExpression(node: any): any;
export function convertToArrayAssignmentElement(element: any): any;
export function convertToArrayAssignmentPattern(node: any): any;
export function convertToAssignmentElementTarget(node: any): any;
export function convertToAssignmentPattern(node: any): any;
export function convertToBase64(input: any): any;
export function convertToFunctionBody(node: any, multiLine: any): any;
export function convertToObject(sourceFile: any, errors: any): any;
export function convertToObjectAssignmentElement(element: any): any;
export function convertToObjectAssignmentPattern(node: any): any;
export function convertToObjectWorker(sourceFile: any, errors: any, returnValue: any, knownRootOptions: any, jsonConversionNotifier: any): any;
export function convertToRelativePath(absoluteOrRelativePath: any, basePath: any, getCanonicalFileName: any): any;
export function convertToTSConfig(configParseResult: any, configFileName: any, host: any): any;
export function convertTypeAcquisitionFromJson(jsonOptions: any, basePath: any, configFileName: any): any;
export function copyComments(sourceNode: any, targetNode: any, sourceFile: any, commentKind: any, hasTrailingNewLine: any): void;
export function copyEntries(source: any, target: any): void;
export function copyProperties(first: any, second: any): void;
export function couldStartTrivia(text: any, pos: any): any;
export function countWhere(array: any, predicate: any): any;
export function createAbstractBuilder(newProgramOrRootNames: any, hostOrOptions: any, oldProgramOrHost: any, configFileParsingDiagnosticsOrOldProgram: any, configFileParsingDiagnostics: any, projectReferences: any): any;
export function createAdd(left: any, right: any): any;
export function createArrayBindingPattern(elements: any): any;
export function createArrayConcat(array: any, values: any): any;
export function createArrayLiteral(elements: any, multiLine: any): any;
export function createArraySlice(array: any, start: any): any;
export function createArrayTypeNode(elementType: any): any;
export function createArrowFunction(modifiers: any, typeParameters: any, parameters: any, type: any, equalsGreaterThanToken: any, body: any): any;
export function createAsExpression(expression: any, type: any): any;
export function createAssignHelper(context: any, attributesSegments: any): any;
export function createAssignment(left: any, right: any): any;
export function createAwait(expression: any): any;
export function createBigIntLiteral(value: any): any;
export function createBinary(left: any, operator: any, right: any): any;
export function createBindingElement(dotDotDotToken: any, propertyName: any, name: any, initializer: any): any;
export function createBlock(statements: any, multiLine: any): any;
export function createBreak(label: any): any;
export function createBuilderProgram(kind: any, _a: any): any;
export function createBuilderStatusReporter(system: any, pretty: any): any;
export function createBundle(sourceFiles: any, prepends: any): any;
export function createCacheWithRedirects(): any;
export function createCachedDirectoryStructureHost(host: any, currentDirectory: any, useCaseSensitiveFileNames: any): any;
export function createCall(expression: any, typeArguments: any, argumentsArray: any, ...args: any[]): any;
export function createCallBinding(expression: any, recordTempVariable: any, languageVersion: any, cacheIdentifiers: any): any;
export function createCallSignature(typeParameters: any, parameters: any, type: any): any;
export function createCaseBlock(clauses: any): any;
export function createCaseClause(expression: any, statements: any): any;
export function createCatchClause(variableDeclaration: any, block: any): any;
export function createClassDeclaration(decorators: any, modifiers: any, name: any, typeParameters: any, heritageClauses: any, members: any): any;
export function createClassExpression(modifiers: any, name: any, typeParameters: any, heritageClauses: any, members: any): any;
export function createClassifier(): any;
export function createComma(left: any, right: any): any;
export function createCommaList(elements: any): any;
export function createCompilerDiagnostic(message: any, ...args: any[]): any;
export function createCompilerDiagnosticForInvalidCustomType(opt: any): any;
export function createCompilerDiagnosticFromMessageChain(chain: any): any;
export function createCompilerHost(options: any, setParentNodes: any): any;
export function createCompilerHostFromProgramHost(host: any, getCompilerOptions: any, directoryStructureHost: any): any;
export function createCompilerHostWorker(options: any, setParentNodes: any, system: any): any;
export function createComputedPropertyName(expression: any): any;
export function createConditional(condition: any, questionTokenOrWhenTrue: any, whenTrueOrWhenFalse: any, colonToken: any, whenFalse: any): any;
export function createConditionalTypeNode(checkType: any, extendsType: any, trueType: any, falseType: any): any;
export function createConstructSignature(typeParameters: any, parameters: any, type: any): any;
export function createConstructor(decorators: any, modifiers: any, parameters: any, body: any): any;
export function createConstructorTypeNode(typeParameters: any, parameters: any, type: any): any;
export function createContinue(label: any): any;
export function createDebuggerStatement(): any;
export function createDecorator(expression: any): any;
export function createDefaultClause(statements: any): any;
export function createDelete(expression: any): any;
export function createDiagnosticCollection(): any;
export function createDiagnosticForNode(node: any, message: any, arg0: any, arg1: any, arg2: any, arg3: any): any;
export function createDiagnosticForNodeArray(sourceFile: any, nodes: any, message: any, arg0: any, arg1: any, arg2: any, arg3: any): any;
export function createDiagnosticForNodeFromMessageChain(node: any, messageChain: any, relatedInformation: any): any;
export function createDiagnosticForNodeInSourceFile(sourceFile: any, node: any, message: any, arg0: any, arg1: any, arg2: any, arg3: any): any;
export function createDiagnosticReporter(system: any, pretty: any): any;
export function createDo(statement: any, expression: any): any;
export function createDocumentPositionMapper(host: any, map: any, mapPath: any): any;
export function createDocumentRegistry(useCaseSensitiveFileNames: any, currentDirectory: any): any;
export function createDocumentRegistryInternal(useCaseSensitiveFileNames: any, currentDirectory: any, externalCache: any): any;
export function createDynamicPriorityPollingWatchFile(host: any): any;
export function createElementAccess(expression: any, index: any): any;
export function createEmitAndSemanticDiagnosticsBuilderProgram(newProgramOrRootNames: any, hostOrOptions: any, oldProgramOrHost: any, configFileParsingDiagnosticsOrOldProgram: any, configFileParsingDiagnostics: any, projectReferences: any): any;
export function createEmptyStatement(): any;
export function createEndOfDeclarationMarker(original: any): any;
export function createEnumDeclaration(decorators: any, modifiers: any, name: any, members: any): any;
export function createEnumMember(name: any, initializer: any): any;
export function createExportAssignment(decorators: any, modifiers: any, isExportEquals: any, expression: any): any;
export function createExportDeclaration(decorators: any, modifiers: any, exportClause: any, moduleSpecifier: any): any;
export function createExportDefault(expression: any): any;
export function createExportSpecifier(propertyName: any, name: any): any;
export function createExpressionForJsxElement(jsxFactoryEntity: any, reactNamespace: any, tagName: any, props: any, children: any, parentElement: any, location: any): any;
export function createExpressionForJsxFragment(jsxFactoryEntity: any, reactNamespace: any, children: any, parentElement: any, location: any): any;
export function createExpressionForObjectLiteralElementLike(node: any, property: any, receiver: any): any;
export function createExpressionForPropertyName(memberName: any): any;
export function createExpressionFromEntityName(node: any): any;
export function createExpressionStatement(expression: any): any;
export function createExpressionWithTypeArguments(typeArguments: any, expression: any): any;
export function createExternalModuleExport(exportName: any): any;
export function createExternalModuleReference(expression: any): any;
export function createFalse(): any;
export function createFileDiagnostic(file: any, start: any, length: any, message: any, ...args: any[]): any;
export function createFileLevelUniqueName(text: any): any;
export function createFor(initializer: any, condition: any, incrementor: any, statement: any): any;
export function createForIn(initializer: any, expression: any, statement: any): any;
export function createForOf(awaitModifier: any, initializer: any, expression: any, statement: any): any;
export function createForOfBindingStatement(node: any, boundValue: any): any;
export function createFunctionApply(func: any, thisArg: any, argumentsExpression: any, location: any): any;
export function createFunctionCall(func: any, thisArg: any, argumentsList: any, location: any): any;
export function createFunctionDeclaration(decorators: any, modifiers: any, asteriskToken: any, name: any, typeParameters: any, parameters: any, type: any, body: any): any;
export function createFunctionExpression(modifiers: any, asteriskToken: any, name: any, typeParameters: any, parameters: any, type: any, body: any): any;
export function createFunctionTypeNode(typeParameters: any, parameters: any, type: any): any;
export function createGetAccessor(decorators: any, modifiers: any, name: any, parameters: any, type: any, body: any): any;
export function createGetCanonicalFileName(useCaseSensitiveFileNames: any): any;
export function createGetSymbolAccessibilityDiagnosticForNode(node: any): any;
export function createGetSymbolAccessibilityDiagnosticForNodeName(node: any): any;
export function createGetSymbolWalker(getRestTypeOfSignature: any, getTypePredicateOfSignature: any, getReturnTypeOfSignature: any, getBaseTypes: any, resolveStructuredTypeMembers: any, getTypeOfSymbol: any, getResolvedSymbol: any, getIndexTypeOfStructuredType: any, getConstraintOfTypeParameter: any, getFirstIdentifier: any): any;
export function createHeritageClause(token: any, types: any): any;
export function createIdentifier(text: any, typeArguments: any): any;
export function createIf(expression: any, thenStatement: any, elseStatement: any): any;
export function createImmediatelyInvokedArrowFunction(statements: any, param: any, paramValue: any): any;
export function createImmediatelyInvokedFunctionExpression(statements: any, param: any, paramValue: any): any;
export function createImportClause(name: any, namedBindings: any): any;
export function createImportDeclaration(decorators: any, modifiers: any, importClause: any, moduleSpecifier: any): any;
export function createImportEqualsDeclaration(decorators: any, modifiers: any, name: any, moduleReference: any): any;
export function createImportSpecifier(propertyName: any, name: any): any;
export function createImportTypeNode(argument: any, qualifier: any, typeArguments: any, isTypeOf: any): any;
export function createIndexSignature(decorators: any, modifiers: any, parameters: any, type: any): any;
export function createIndexedAccessTypeNode(objectType: any, indexType: any): any;
export function createInferTypeNode(typeParameter: any): any;
export function createInputFiles(javascriptTextOrReadFileText: any, declarationTextOrJavascriptPath: any, javascriptMapPath: any, javascriptMapTextOrDeclarationPath: any, declarationMapPath: any, declarationMapText: any): any;
export function createInterfaceDeclaration(decorators: any, modifiers: any, name: any, typeParameters: any, heritageClauses: any, members: any): any;
export function createIntersectionTypeNode(types: any): any;
export function createJSDocComment(comment: any, tags: any): any;
export function createJSDocParamTag(name: any, isBracketed: any, typeExpression: any, comment: any): any;
export function createJSDocReturnTag(typeExpression: any, comment: any): any;
export function createJSDocTypeExpression(type: any): any;
export function createJSDocTypeTag(typeExpression: any, comment: any): any;
export function createJsxAttribute(name: any, initializer: any): any;
export function createJsxAttributes(properties: any): any;
export function createJsxClosingElement(tagName: any): any;
export function createJsxElement(openingElement: any, children: any, closingElement: any): any;
export function createJsxExpression(dotDotDotToken: any, expression: any): any;
export function createJsxFragment(openingFragment: any, children: any, closingFragment: any): any;
export function createJsxOpeningElement(tagName: any, typeArguments: any, attributes: any): any;
export function createJsxSelfClosingElement(tagName: any, typeArguments: any, attributes: any): any;
export function createJsxSpreadAttribute(expression: any): any;
export function createKeywordTypeNode(kind: any): any;
export function createLabel(label: any, statement: any): any;
export function createLanguageService(host: any, documentRegistry: any, syntaxOnly: any): any;
export function createLanguageServiceSourceFile(fileName: any, scriptSnapshot: any, scriptTarget: any, version: any, setNodeParents: any, scriptKind: any): any;
export function createLessThan(left: any, right: any): any;
export function createLiteral(value: any, isSingleQuote: any): any;
export function createLiteralTypeNode(literal: any): any;
export function createLogicalAnd(left: any, right: any): any;
export function createLogicalNot(operand: any): any;
export function createLogicalOr(left: any, right: any): any;
export function createLoopVariable(): any;
export function createMap(): any;
export function createMapFromEntries(entries: any): any;
export function createMapFromTemplate(template: any): any;
export function createMappedTypeNode(readonlyToken: any, typeParameter: any, questionToken: any, type: any): any;
export function createMathPow(left: any, right: any, location: any): any;
export function createMemberAccessForPropertyName(target: any, memberName: any, location: any): any;
export function createMergeDeclarationMarker(original: any): any;
export function createMetaProperty(keywordToken: any, name: any): any;
export function createMethod(decorators: any, modifiers: any, asteriskToken: any, name: any, questionToken: any, typeParameters: any, parameters: any, type: any, body: any): any;
export function createMethodSignature(typeParameters: any, parameters: any, type: any, name: any, questionToken: any): any;
export function createModifier(kind: any): any;
export function createModifiersFromModifierFlags(flags: any): any;
export function createModuleBlock(statements: any): any;
export function createModuleDeclaration(decorators: any, modifiers: any, name: any, body: any, flags: any): any;
export function createModuleResolutionCache(currentDirectory: any, getCanonicalFileName: any): any;
export function createModuleResolutionCacheWithMaps(directoryToModuleNameMap: any, moduleNameToDirectoryMap: any, currentDirectory: any, getCanonicalFileName: any): any;
export function createMultiMap(): any;
export function createNamedExports(elements: any): any;
export function createNamedImports(elements: any): any;
export function createNamespaceExportDeclaration(name: any): any;
export function createNamespaceImport(name: any): any;
export function createNew(expression: any, typeArguments: any, argumentsArray: any, ...args: any[]): any;
export function createNoSubstitutionTemplateLiteral(text: any): any;
export function createNode(kind: any, pos: any, end: any): any;
export function createNodeArray(elements: any, hasTrailingComma: any): any;
export function createNonNullExpression(expression: any): any;
export function createNotEmittedStatement(original: any): any;
export function createNull(): any;
export function createNumericLiteral(value: any): any;
export function createObjectBindingPattern(elements: any): any;
export function createObjectLiteral(properties: any, multiLine: any): any;
export function createOmittedExpression(): any;
export function createOptimisticUniqueName(text: any): any;
export function createOptionNameMap(optionDeclarations: any): any;
export function createOptionalTypeNode(type: any): any;
export function createParameter(decorators: any, modifiers: any, dotDotDotToken: any, name: any, questionToken: any, type: any, initializer: any): any;
export function createParen(expression: any): any;
export function createParenthesizedType(type: any): any;
export function createPartiallyEmittedExpression(expression: any, original: any): any;
export function createPatternMatcher(pattern: any): any;
export function createPostfix(operand: any, operator: any): any;
export function createPostfixIncrement(operand: any): any;
export function createPrefix(operator: any, operand: any): any;
export function createPrinter(printerOptions: any, handlers: any): any;
export function createProgram(rootNamesOrOptions: any, _options: any, _host: any, _oldProgram: any, _configFileParsingDiagnostics: any): any;
export function createProgramHost(system: any, createProgram: any): any;
export function createProperty(decorators: any, modifiers: any, name: any, questionOrExclamationToken: any, type: any, initializer: any): any;
export function createPropertyAccess(expression: any, name: any): any;
export function createPropertyAssignment(name: any, initializer: any): any;
export function createPropertySignature(modifiers: any, name: any, questionToken: any, type: any, initializer: any): any;
export function createQualifiedName(left: any, right: any): any;
export function createRange(pos: any, end: any): any;
export function createReadHelper(context: any, iteratorRecord: any, count: any, location: any): any;
export function createRecursiveDirectoryWatcher(host: any): any;
export function createRedirectedBuilderProgram(state: any, configFileParsingDiagnostics: any): any;
export function createRegularExpressionLiteral(text: any): any;
export function createResolutionCache(resolutionHost: any, rootDirForResolution: any, logChangesWhenResolvingModule: any): any;
export function createRestTypeNode(type: any): any;
export function createReturn(expression: any): any;
export function createScanner(languageVersion: any, skipTrivia: any, languageVariant: any, textInitial: any, onError: any, start: any, length: any): any;
export function createSemanticDiagnosticsBuilderProgram(newProgramOrRootNames: any, hostOrOptions: any, oldProgramOrHost: any, configFileParsingDiagnosticsOrOldProgram: any, configFileParsingDiagnostics: any, projectReferences: any): any;
export function createSemicolonClassElement(): any;
export function createSetAccessor(decorators: any, modifiers: any, name: any, parameters: any, body: any): any;
export function createShorthandPropertyAssignment(name: any, objectAssignmentInitializer: any): any;
export function createSignatureDeclaration(kind: any, typeParameters: any, parameters: any, type: any, typeArguments: any): any;
export function createSolutionBuilder(host: any, rootNames: any, defaultOptions: any): any;
export function createSolutionBuilderHost(system: any, createProgram: any, reportDiagnostic: any, reportSolutionBuilderStatus: any, reportErrorSummary: any): any;
export function createSolutionBuilderWithWatchHost(system: any, createProgram: any, reportDiagnostic: any, reportSolutionBuilderStatus: any, reportWatchStatus: any): any;
export function createSourceFile(fileName: any, sourceText: any, languageVersion: any, setParentNodes: any, scriptKind: any): any;
export function createSourceMapGenerator(host: any, file: any, sourceRoot: any, sourcesDirectoryPath: any, generatorOptions: any): any;
export function createSourceMapSource(fileName: any, text: any, skipTrivia: any): any;
export function createSpread(expression: any): any;
export function createSpreadAssignment(expression: any): any;
export function createSpreadHelper(context: any, argumentList: any, location: any): any;
export function createStatement(expression: any): any;
export function createStrictEquality(left: any, right: any): any;
export function createStrictInequality(left: any, right: any): any;
export function createStringLiteral(text: any): any;
export function createSubtract(left: any, right: any): any;
export function createSuper(): any;
export function createSuperAccessVariableStatement(resolver: any, node: any, names: any): any;
export function createSwitch(expression: any, caseBlock: any): any;
export function createSymbolTable(symbols: any): any;
export function createTaggedTemplate(tag: any, typeArgumentsOrTemplate: any, template: any): any;
export function createTempVariable(recordTempVariable: any, reservedInNestedScopes: any): any;
export function createTemplateExpression(head: any, templateSpans: any): any;
export function createTemplateHead(text: any): any;
export function createTemplateMiddle(text: any): any;
export function createTemplateSpan(expression: any, literal: any): any;
export function createTemplateTail(text: any): any;
export function createTextChange(span: any, newText: any): any;
export function createTextChangeFromStartLength(start: any, length: any, newText: any): any;
export function createTextChangeRange(span: any, newLength: any): any;
export function createTextRangeFromNode(node: any, sourceFile: any): any;
export function createTextRangeFromSpan(span: any): any;
export function createTextSpan(start: any, length: any): any;
export function createTextSpanFromBounds(start: any, end: any): any;
export function createTextSpanFromNode(node: any, sourceFile: any): any;
export function createTextSpanFromRange(range: any): any;
export function createTextWriter(newLine: any): any;
export function createThis(): any;
export function createThisTypeNode(): any;
export function createThrow(expression: any): any;
export function createToken(token: any): any;
export function createTokenRange(pos: any, token: any): any;
export function createTrue(): any;
export function createTry(tryBlock: any, catchClause: any, finallyBlock: any): any;
export function createTupleTypeNode(elementTypes: any): any;
export function createTypeAliasDeclaration(decorators: any, modifiers: any, name: any, typeParameters: any, type: any): any;
export function createTypeAssertion(type: any, expression: any): any;
export function createTypeCheck(value: any, tag: any): any;
export function createTypeChecker(host: any, produceDiagnostics: any): any;
export function createTypeLiteralNode(members: any): any;
export function createTypeOf(expression: any): any;
export function createTypeOperatorNode(operatorOrType: any, type: any): any;
export function createTypeParameterDeclaration(name: any, constraint: any, defaultType: any): any;
export function createTypePredicateNode(parameterName: any, type: any): any;
export function createTypeQueryNode(exprName: any): any;
export function createTypeReferenceNode(typeName: any, typeArguments: any): any;
export function createUnderscoreEscapedMap(): any;
export function createUnionOrIntersectionTypeNode(kind: any, types: any): any;
export function createUnionTypeNode(types: any): any;
export function createUniqueName(text: any): any;
export function createUnparsedSourceFile(textOrInputFiles: any, mapPathOrType: any, map: any): any;
export function createValuesHelper(context: any, expression: any, location: any): any;
export function createVariableDeclaration(name: any, type: any, initializer: any): any;
export function createVariableDeclarationList(declarations: any, flags: any): any;
export function createVariableStatement(modifiers: any, declarationList: any): any;
export function createVoid(expression: any): any;
export function createVoidZero(): any;
export function createWatchCompilerHost(rootFilesOrConfigFileName: any, options: any, system: any, createProgram: any, reportDiagnostic: any, reportWatchStatus: any, projectReferences: any): any;
export function createWatchCompilerHostOfConfigFile(configFileName: any, optionsToExtend: any, system: any, createProgram: any, reportDiagnostic: any, reportWatchStatus: any): any;
export function createWatchCompilerHostOfFilesAndCompilerOptions(rootFiles: any, options: any, system: any, createProgram: any, reportDiagnostic: any, reportWatchStatus: any, projectReferences: any): any;
export function createWatchFactory(host: any, options: any): any;
export function createWatchHost(system: any, reportWatchStatus: any): any;
export function createWatchProgram(host: any): any;
export function createWatchStatusReporter(system: any, pretty: any): any;
export function createWhile(expression: any, statement: any): any;
export function createWith(expression: any, statement: any): any;
export function createYield(asteriskTokenOrExpression: any, expression: any): any;
export function declarationNameToString(name: any): any;
export function decodeMappings(mappings: any): any;
export function decodedTextSpanIntersectsWith(start1: any, length1: any, start2: any, length2: any): any;
export function deduplicate(array: any, equalityComparer: any, comparer: any): any;
export const defaultInitCompilerOptions: {
    esModuleInterop: boolean;
    module: number;
    strict: boolean;
    target: number;
};
export const defaultMaximumTruncationLength: number;
export function diagnosticCategoryName(d: any, lowerCase: any): any;
export function directoryProbablyExists(directoryName: any, host: any): any;
export const directorySeparator: string;
export const disableIncrementalParsing: boolean;
export function displayPart(text: any, kind: any): any;
export function displayPartsToString(displayParts: any): any;
export function disposeEmitNodes(sourceFile: any): void;
export function documentSpansEqual(a: any, b: any): any;
export function elementAt(array: any, offset: any): any;
export function emitComments(text: any, lineMap: any, writer: any, comments: any, leadingSeparator: any, trailingSeparator: any, newLine: any, writeComment: any): void;
export function emitDetachedComments(text: any, lineMap: any, writer: any, writeComment: any, node: any, newLine: any, removeComments: any): any;
export function emitFiles(resolver: any, host: any, targetSourceFile: any, emitOnlyDtsFiles: any, transformers: any, declarationTransformers: any): any;
export function emitFilesAndReportErrors(program: any, reportDiagnostic: any, writeFileName: any, reportSummary: any, writeFile: any): any;
export function emitNewLineBeforeLeadingCommentOfPosition(lineMap: any, writer: any, pos: any, commentPos: any): void;
export function emitNewLineBeforeLeadingComments(lineMap: any, writer: any, node: any, leadingComments: any): void;
export function emitNewLineBeforeLeadingCommentsOfPosition(lineMap: any, writer: any, pos: any, leadingComments: any): void;
export const emptyArray: any[];
export const emptyFileSystemEntries: {
    directories: any[];
    files: any[];
};
export namespace emptyIterator {
    function next(): any;
}
export const emptyMap: Map;
export const emptyOptions: {};
export const emptyUnderscoreEscapedMap: Map;
export function endsWith(str: any, suffix: any): any;
export function ensurePathIsNonModuleName(path: any): any;
export function ensureScriptKind(fileName: any, scriptKind: any): any;
export function ensureTrailingDirectorySeparator(path: any): any;
export function ensureUseStrict(statements: any): any;
export function entityNameToString(name: any): any;
export function enumerateInsertsAndDeletes(newItems: any, oldItems: any, comparer: any, inserted: any, deleted: any, unchanged: any): void;
export function equalOwnProperties(left: any, right: any, equalityComparer: any): any;
export function equateStringsCaseInsensitive(a: any, b: any): any;
export function equateStringsCaseSensitive(a: any, b: any): any;
export function equateValues(a: any, b: any): any;
export function escapeLeadingUnderscores(identifier: any): any;
export function escapeNonAsciiString(s: any, quoteChar: any): any;
export function escapeString(s: any, quoteChar: any): any;
export function every(array: any, callback: any): any;
export function exportAssignmentIsAlias(node: any): any;
export function extend(first: any, second: any): any;
export function extensionFromPath(path: any): any;
export function extensionIsTS(ext: any): any;
export const externalHelpersModuleNameText: string;
export function fileExtensionIs(path: any, extension: any): any;
export function fileExtensionIsOneOf(path: any, extensions: any): any;
export function fill(length: any, cb: any): any;
export function filter(array: any, f: any): any;
export function filterMutate(array: any, f: any): void;
export function find(array: any, predicate: any): any;
export function findAncestor(node: any, callback: any): any;
export function findBestPatternMatch(values: any, getPattern: any, candidate: any): any;
export function findChildOfKind(n: any, kind: any, sourceFile: any): any;
export function findConfigFile(searchPath: any, fileExists: any, configName: any): any;
export function findContainingList(node: any): any;
export function findIndex(array: any, predicate: any, startIndex: any): any;
export function findLast(array: any, predicate: any): any;
export function findLastIndex(array: any, predicate: any, startIndex: any): any;
export function findListItemInfo(node: any): any;
export function findMap(array: any, callback: any): any;
export function findModifier(node: any, kind: any): any;
export function findNextToken(previousToken: any, parent: any, sourceFile: any): any;
export function findPrecedingMatchingToken(token: any, matchingTokenKind: any, sourceFile: any): any;
export function findPrecedingToken(position: any, sourceFile: any, startNode: any, excludeJsdoc: any): any;
export function findTokenOnLeftOfPosition(file: any, position: any): any;
export function findUseStrictPrologue(statements: any): any;
export function first(array: any): any;
export function firstDefined(array: any, callback: any): any;
export function firstDefinedIterator(iter: any, callback: any): any;
export function firstOrUndefined(array: any): any;
export function fixupCompilerOptions(options: any, diagnostics: any): any;
export function flatMap(array: any, mapfn: any): any;
export function flatMapIterator(iter: any, mapfn: any): any;
export function flatMapToMutable(array: any, mapfn: any): any;
export function flatten(array: any): any;
export function flattenDestructuringAssignment(node: any, visitor: any, context: any, level: any, needsValue: any, createAssignmentCallback: any): any;
export function flattenDestructuringBinding(node: any, visitor: any, context: any, level: any, rval: any, hoistTempVariables: any, skipInitializer: any): any;
export function flattenDiagnosticMessageText(messageText: any, newLine: any): any;
export function forEach(array: any, callback: any): any;
export function forEachAncestor(node: any, callback: any): any;
export function forEachAncestorDirectory(directory: any, callback: any): any;
export function forEachChild(node: any, cbNode: any, cbNodes: any, ...args: any[]): any;
export function forEachEmittedFile(host: any, action: any, sourceFilesOrTargetSourceFile: any, emitOnlyDtsFiles: any): any;
export function forEachEntry(map: any, callback: any): any;
export function forEachKey(map: any, callback: any): any;
export function forEachLeadingCommentRange(text: any, pos: any, cb: any, state: any): any;
export function forEachReturnStatement(body: any, visitor: any): any;
export function forEachTrailingCommentRange(text: any, pos: any, cb: any, state: any): any;
export function forEachYieldExpression(body: any, visitor: any): any;
export function forSomeAncestorDirectory(directory: any, callback: any): any;
export function formatColorAndReset(text: any, formatStyle: any): any;
export function formatDiagnostic(diagnostic: any, host: any): any;
export function formatDiagnostics(diagnostics: any, host: any): any;
export function formatDiagnosticsWithColorAndContext(diagnostics: any, host: any): any;
export function formatEmitFlags(flags: any): any;
export function formatLocation(file: any, start: any, host: any, color: any): any;
export function formatMessage(_dummy: any, message: any, ...args: any[]): any;
export function formatModifierFlags(flags: any): any;
export function formatObjectFlags(flags: any): any;
export function formatStringFromArgs(text: any, args: any, baseIndex: any): any;
export function formatSymbolFlags(flags: any): any;
export function formatSyntaxKind(kind: any): any;
export function formatTransformFlags(flags: any): any;
export function formatTypeFlags(flags: any): any;
export function formatUpToDateStatus(configFileName: any, status: any, relName: any, formatMessage: any): any;
export namespace formatting {
    class FormattingContext {
        constructor(sourceFile: any, formattingRequestKind: any, options: any);
        sourceFile: any;
        formattingRequestKind: any;
        options: any;
        BlockIsOnOneLine(node: any): any;
        ContextNodeAllOnSameLine(): any;
        ContextNodeBlockIsOnOneLine(): any;
        NextNodeAllOnSameLine(): any;
        NextNodeBlockIsOnOneLine(): any;
        NodeIsOnOneLine(node: any): any;
        TokensAreOnSameLine(): any;
        updateContext(currentRange: any, currentTokenParent: any, nextRange: any, nextTokenParent: any, commonParent: any): void;
    }
    const FormattingRequestKind: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        FormatDocument: number;
        FormatOnClosingCurlyBrace: number;
        FormatOnEnter: number;
        FormatOnOpeningCurlyBrace: number;
        FormatOnSemicolon: number;
        FormatSelection: number;
    };
    const RuleAction: {
        "1": string;
        "2": string;
        "4": string;
        "8": string;
        Delete: number;
        Ignore: number;
        NewLine: number;
        Space: number;
    };
    const RuleFlags: {
        "0": string;
        "1": string;
        CanDeleteNewLines: number;
        None: number;
    };
    namespace SmartIndenter {
        function childStartsOnTheSameLineWithElseInIfStatement(parent: any, child: any, childStartLine: any, sourceFile: any): any;
        function findFirstNonWhitespaceCharacterAndColumn(startPos: any, endPos: any, sourceFile: any, options: any): any;
        function findFirstNonWhitespaceColumn(startPos: any, endPos: any, sourceFile: any, options: any): any;
        function getBaseIndentation(options: any): any;
        function getContainingList(node: any, sourceFile: any): any;
        function getIndentation(position: any, sourceFile: any, options: any, assumeNewLineBeforeCloseBrace: any): any;
        function getIndentationForNode(n: any, ignoreActualIndentationRange: any, sourceFile: any, options: any): any;
        function isArgumentAndStartLineOverlapsExpressionBeingCalled(parent: any, child: any, childStartLine: any, sourceFile: any, ...args: any[]): any;
        function nodeWillIndentChild(settings: any, parent: any, child: any, sourceFile: any, indentByDefault: any): any;
        function shouldIndentChildNode(settings: any, parent: any, child: any, sourceFile: any, isNextChild: any): any;
    }
    const anyContext: any[];
    function formatDocument(sourceFile: any, formatContext: any): any;
    function formatNodeGivenIndentation(node: any, sourceFileLike: any, languageVariant: any, initialIndentation: any, delta: any, formatContext: any): any;
    function formatOnClosingCurly(position: any, sourceFile: any, formatContext: any): any;
    function formatOnEnter(position: any, sourceFile: any, formatContext: any): any;
    function formatOnOpeningCurly(position: any, sourceFile: any, formatContext: any): any;
    function formatOnSemicolon(position: any, sourceFile: any, formatContext: any): any;
    function formatSelection(start: any, end: any, sourceFile: any, formatContext: any): any;
    function getAllRules(): any;
    function getFormatContext(options: any): any;
    function getFormattingScanner(text: any, languageVariant: any, startPos: any, endPos: any, cb: any): any;
    function getIndentationString(indentation: any, options: any): any;
    function getRangeOfEnclosingComment(sourceFile: any, position: any, precedingToken: any, tokenAtPosition: any): any;
}
export const fullTripleSlashAMDReferencePathRegEx: RegExp;
export const fullTripleSlashReferencePathRegEx: RegExp;
export function generateDjb2Hash(data: any): any;
export function generateTSConfig(options: any, fileNames: any, newLine: any): any;
export function generateTypesForGlobal(name: any, globalValue: any, formatSettings: any): any;
export function generateTypesForModule(name: any, moduleValue: any, formatSettings: any): any;
export function getAllAccessorDeclarations(declarations: any, accessor: any): any;
export function getAllJSDocTagsOfKind(node: any, kind: any): any;
export function getAllProjectOutputs(project: any): any;
export function getAllSuperTypeNodes(node: any): any;
export function getAllowSyntheticDefaultImports(compilerOptions: any): any;
export function getAncestor(node: any, kind: any): any;
export function getAnyExtensionFromPath(path: any, extensions: any, ignoreCase: any): any;
export function getAreDeclarationMapsEnabled(options: any): any;
export function getAssignedExpandoInitializer(node: any, ...args: any[]): any;
export function getAssignmentDeclarationKind(expr: any): any;
export function getAssignmentDeclarationPropertyAccessKind(lhs: any): any;
export function getAssignmentTargetKind(node: any): any;
export function getAutomaticTypeDirectiveNames(options: any, host: any): any;
export function getBaseFileName(path: any, extensions: any, ignoreCase: any): any;
export function getBinaryOperatorPrecedence(kind: any): any;
export function getBuilderCreationParameters(newProgramOrRootNames: any, hostOrOptions: any, oldProgramOrHost: any, configFileParsingDiagnosticsOrOldProgram: any, configFileParsingDiagnostics: any, projectReferences: any): any;
export function getCheckFlags(symbol: any): any;
export function getClassExtendsHeritageElement(node: any): any;
export function getClassImplementsHeritageClauseElements(node: any): any;
export function getClassLikeDeclarationOfSymbol(symbol: any): any;
export function getCombinedLocalAndExportSymbolFlags(symbol: any): any;
export function getCombinedModifierFlags(node: any): any;
export function getCombinedNodeFlags(node: any): any;
export function getCommentRange(node: any): any;
export function getCompilerOptionValue(options: any, option: any): any;
export function getConfigFileParsingDiagnostics(configFileParseResult: any): any;
export function getConstantValue(node: any): any;
export function getContainerNode(node: any): any;
export function getContainingClass(node: any): any;
export function getContainingFunction(node: any): any;
export function getContainingObjectLiteralElement(node: any): any;
export function getContextualTypeFromParent(node: any, checker: any): any;
export function getDeclarationDiagnostics(host: any, resolver: any, file: any): any;
export function getDeclarationEmitOutputFilePath(fileName: any, host: any): any;
export function getDeclarationEmitOutputFilePathWorker(fileName: any, options: any, currentDirectory: any, commonSourceDirectory: any, getCanonicalFileName: any): any;
export function getDeclarationFromName(name: any): any;
export function getDeclarationModifierFlagsFromSymbol(s: any): any;
export function getDeclarationName(node: any, allowComments: any, allowSourceMaps: any): any;
export function getDeclarationOfExpando(node: any): any;
export function getDeclarationOfKind(symbol: any, kind: any): any;
export function getDeclaredExpandoInitializer(node: any): any;
export function getDefaultCompilerOptions(): any;
export function getDefaultFormatCodeSettings(newLineCharacter: any): any;
export function getDefaultLibFileName(options: any): any;
export function getDefaultLibFilePath(options: any): any;
export function getDirectoryPath(path: any): any;
export function getDocumentPositionMapper(host: any, generatedFileName: any, generatedFileLineInfo: any, readMapFile: any): any;
export function getEditsForFileRename(program: any, oldFileOrDirPath: any, newFileOrDirPath: any, host: any, formatContext: any, _preferences: any, sourceMapper: any): any;
export function getEffectiveBaseTypeNode(node: any): any;
export function getEffectiveConstraintOfTypeParameter(node: any): any;
export function getEffectiveInitializer(node: any): any;
export function getEffectiveReturnTypeNode(node: any): any;
export function getEffectiveSetAccessorTypeAnnotationNode(node: any): any;
export function getEffectiveTypeAnnotationNode(node: any): any;
export function getEffectiveTypeParameterDeclarations(node: any): any;
export function getEffectiveTypeRoots(options: any, host: any): any;
export function getElementsOfBindingOrAssignmentPattern(name: any): any;
export function getEmitDeclarations(compilerOptions: any): any;
export function getEmitFlags(node: any): any;
export function getEmitHelpers(node: any): any;
export function getEmitModuleKind(compilerOptions: any): any;
export function getEmitModuleResolutionKind(compilerOptions: any): any;
export function getEmitScriptTarget(compilerOptions: any): any;
export function getEnclosingBlockScopeContainer(node: any): any;
export function getEncodedSemanticClassifications(typeChecker: any, cancellationToken: any, sourceFile: any, classifiableNames: any, span: any): any;
export function getEncodedSyntacticClassifications(cancellationToken: any, sourceFile: any, span: any): any;
export function getEndLinePosition(line: any, sourceFile: any): any;
export function getEntityNameFromTypeNode(node: any): any;
export function getErrorCountForSummary(diagnostics: any): any;
export function getErrorSpanForNode(sourceFile: any, node: any): any;
export function getErrorSummaryText(errorCount: any, newLine: any): any;
export function getEscapedTextOfIdentifierOrLiteral(node: any): any;
export function getExpandoInitializer(initializer: any, isPrototypeAssignment: any): any;
export function getExportName(node: any, allowComments: any, allowSourceMaps: any): any;
export function getExpressionAssociativity(expression: any, ...args: any[]): any;
export function getExpressionPrecedence(expression: any, ...args: any[]): any;
export function getExtensionPriority(path: any, supportedExtensions: any): any;
export function getExternalHelpersModuleName(node: any): any;
export function getExternalModuleImportEqualsDeclarationExpression(node: any): any;
export function getExternalModuleName(node: any): any;
export function getExternalModuleNameFromDeclaration(host: any, resolver: any, declaration: any): any;
export function getExternalModuleNameFromPath(host: any, fileName: any, referencePath: any): any;
export function getExternalModuleNameLiteral(importNode: any, sourceFile: any, host: any, resolver: any, compilerOptions: any): any;
export function getExternalModuleOrNamespaceExportName(ns: any, node: any, allowComments: any, allowSourceMaps: any): any;
export function getFileEmitOutput(program: any, sourceFile: any, emitOnlyDtsFiles: any, cancellationToken: any, customTransformers: any): any;
export function getFileMatcherPatterns(path: any, excludes: any, includes: any, useCaseSensitiveFileNames: any, currentDirectory: any): any;
export function getFileNamesFromConfigSpecs(spec: any, basePath: any, options: any, host: any, extraFileExtensions: any): any;
export function getFileWatcherEventKind(oldTime: any, newTime: any): any;
export function getFirstConstructorWithBody(node: any): any;
export function getFirstNonSpaceCharacterPosition(text: any, position: any): any;
export function getFullWidth(node: any): any;
export function getFunctionFlags(node: any): any;
export function getGeneratedNameForNode(node: any, flags: any): any;
export function getHelperName(name: any): any;
export function getHeritageClause(clauses: any, kind: any): any;
export function getHostSignatureFromJSDoc(node: any): any;
export function getHostSignatureFromJSDocHost(host: any): any;
export function getImmediatelyInvokedFunctionExpression(func: any): any;
export function getImportNeedsImportDefaultHelper(node: any): any;
export function getImportNeedsImportStarHelper(node: any): any;
export function getIndentSize(): any;
export function getIndentString(level: any): any;
export function getInitializedVariables(node: any): any;
export function getInitializerOfBinaryExpression(expr: any): any;
export function getInitializerOfBindingOrAssignmentElement(bindingElement: any): any;
export function getInterfaceBaseTypeNodes(node: any): any;
export function getInternalName(node: any, allowComments: any, allowSourceMaps: any): any;
export function getInvokedExpression(node: any): any;
export function getJSDocAugmentsTag(node: any): any;
export function getJSDocClassTag(node: any): any;
export function getJSDocCommentRanges(node: any, text: any): any;
export function getJSDocCommentsAndTags(hostNode: any): any;
export function getJSDocEnumTag(node: any): any;
export function getJSDocHost(node: any): any;
export function getJSDocParameterTags(param: any): any;
export function getJSDocReturnTag(node: any): any;
export function getJSDocReturnType(node: any): any;
export function getJSDocTags(node: any): any;
export function getJSDocTemplateTag(node: any): any;
export function getJSDocThisTag(node: any): any;
export function getJSDocType(node: any): any;
export function getJSDocTypeParameterDeclarations(node: any): any;
export function getJSDocTypeParameterTags(param: any): any;
export function getJSDocTypeTag(node: any): any;
export function getLastChild(node: any): any;
export function getLeadingCommentRanges(text: any, pos: any): any;
export function getLeadingCommentRangesOfNode(node: any, sourceFileOfNode: any): any;
export function getLineAndCharacterOfPosition(sourceFile: any, position: any): any;
export function getLineInfo(text: any, lineStarts: any): any;
export function getLineOfLocalPosition(currentSourceFile: any, pos: any): any;
export function getLineOfLocalPositionFromLineMap(lineMap: any, pos: any): any;
export function getLineStartPositionForPosition(position: any, sourceFile: any): any;
export function getLineStarts(sourceFile: any): any;
export function getLiteralText(node: any, sourceFile: any, neverAsciiEscape: any): any;
export function getLocalName(node: any, allowComments: any, allowSourceMaps: any): any;
export function getLocalNameForExternalImport(node: any, sourceFile: any): any;
export function getLocalSymbolForExportDefault(symbol: any): any;
export function getLocaleSpecificMessage(message: any): any;
export function getMeaningFromDeclaration(node: any): any;
export function getMeaningFromLocation(node: any): any;
export function getMembersOfDeclaration(node: any): any;
export function getModifierFlags(node: any): any;
export function getModifierFlagsNoCache(node: any): any;
export function getModuleInstanceState(node: any): any;
export function getMutableClone(node: any): any;
export function getNameFromIndexInfo(info: any): any;
export function getNameFromPropertyName(name: any): any;
export function getNameOfDeclaration(declaration: any): any;
export function getNameOfExpando(node: any): any;
export function getNameOfJSDocTypedef(declaration: any): any;
export function getNameTable(sourceFile: any): any;
export function getNamespaceDeclarationNode(node: any): any;
export function getNamespaceMemberName(ns: any, name: any, allowComments: any, allowSourceMaps: any): any;
export function getNewLineCharacter(options: any, getNewLine: any): any;
export function getNewLineOrDefaultFromHost(host: any, formatSettings: any): any;
export function getNewTargetContainer(node: any): any;
export function getNextLowestExtensionPriority(extensionPriority: any, supportedExtensions: any): any;
export function getNodeId(node: any): any;
export function getNodeKind(node: any): any;
export function getNodeMajorVersion(): any;
export function getNodeModifiers(node: any): any;
export function getNonAssignedNameOfDeclaration(declaration: any, ...args: any[]): any;
export function getNonAugmentationDeclaration(symbol: any): any;
export function getNonDecoratorTokenPosOfNode(node: any, sourceFile: any): any;
export function getNormalizedAbsolutePath(fileName: any, currentDirectory: any): any;
export function getNormalizedPathComponents(path: any, currentDirectory: any): any;
export function getObjectFlags(type: any): any;
export function getOperator(expression: any): any;
export function getOperatorAssociativity(kind: any, operator: any, hasArguments: any): any;
export function getOperatorPrecedence(nodeKind: any, operatorKind: any, hasArguments: any): any;
export function getOptionFromName(optionName: any, allowShort: any): any;
export function getOrCreateEmitNode(node: any): any;
export function getOrCreateExternalHelpersModuleNameIfNeeded(node: any, compilerOptions: any, hasExportStarsToExportValues: any, hasImportStarOrImportDefault: any): any;
export function getOrUpdate(map: any, key: any, getDefault: any): any;
export function getOriginalNode(node: any, nodeTest: any): any;
export function getOriginalNodeId(node: any): any;
export function getOriginalSourceFile(sourceFile: any): any;
export function getOutputDeclarationFileName(inputFileName: any, configFile: any): any;
export function getOutputExtension(sourceFile: any, options: any): any;
export function getOutputPathsFor(sourceFile: any, host: any, forceDtsPaths: any): any;
export function getOutputPathsForBundle(options: any, forceDtsPaths: any): any;
export function getOwnEmitOutputFilePath(fileName: any, host: any, extension: any): any;
export function getOwnKeys(map: any): any;
export function getOwnValues(sparseArray: any): any;
export function getPackageJsonTypesVersionsPaths(typesVersions: any): any;
export function getPackageNameFromTypesPackageName(mangledName: any): any;
export function getParameterSymbolFromJSDoc(node: any): any;
export function getParentNodeInSpan(node: any, file: any, span: any): any;
export function getParseTreeNode(node: any, nodeTest: any): any;
export function getParsedCommandLineOfConfigFile(configFileName: any, optionsToExtend: any, host: any): any;
export function getPathComponents(path: any, currentDirectory: any): any;
export function getPathComponentsRelativeTo(from: any, to: any, stringEqualityComparer: any, getCanonicalFileName: any): any;
export function getPathFromPathComponents(pathComponents: any): any;
export function getPathUpdater(oldFileOrDirPath: any, newFileOrDirPath: any, getCanonicalFileName: any, sourceMapper: any): any;
export function getPositionOfLineAndCharacter(sourceFile: any, line: any, character: any, allowEdits: any): any;
export function getPossibleGenericSignatures(called: any, typeArgumentCount: any, checker: any): any;
export function getPossibleTypeArgumentsInfo(tokenIn: any, sourceFile: any): any;
export function getPreEmitDiagnostics(program: any, sourceFile: any, cancellationToken: any): any;
export function getPrecedingNonSpaceCharacterPosition(text: any, position: any): any;
export function getProperty(map: any, key: any): any;
export function getPropertyAssignment(objectLiteral: any, key: any, key2: any): any;
export function getPropertyNameForKnownSymbolName(symbolName: any): any;
export function getPropertyNameForPropertyNameNode(name: any): any;
export function getPropertyNameOfBindingOrAssignmentElement(bindingElement: any): any;
export function getPropertySymbolFromBindingElement(checker: any, bindingElement: any): any;
export function getPropertySymbolsFromBaseTypes(symbol: any, propertyName: any, checker: any, cb: any): any;
export function getPropertySymbolsFromContextualType(node: any, checker: any, contextualType: any, unionSymbolOk: any): any;
export function getQuoteFromPreference(qp: any): any;
export function getQuotePreference(sourceFile: any, preferences: any): any;
export function getRangesWhere(arr: any, pred: any, cb: any): void;
export function getRefactorContextSpan(_a: any): any;
export function getRegexFromPattern(pattern: any, useCaseSensitiveFileNames: any): any;
export function getRegularExpressionForWildcard(specs: any, basePath: any, usage: any): any;
export function getRegularExpressionsForWildcards(specs: any, basePath: any, usage: any): any;
export function getRelativePathFromDirectory(fromDirectory: any, to: any, getCanonicalFileNameOrIgnoreCase: any): any;
export function getRelativePathFromFile(from: any, to: any, getCanonicalFileName: any): any;
export function getRelativePathToDirectoryOrUrl(directoryPathOrUrl: any, relativeOrAbsolutePath: any, currentDirectory: any, getCanonicalFileName: any, isAbsolutePathAnUrl: any): any;
export function getRenameLocation(edits: any, renameFilename: any, name: any, preferLastLocation: any): any;
export function getResolutionDiagnostic(options: any, _a: any): any;
export function getResolvedExternalModuleName(host: any, file: any, referenceFile: any): any;
export function getResolvedModule(sourceFile: any, moduleNameText: any): any;
export function getRestIndicatorOfBindingOrAssignmentElement(bindingElement: any): any;
export function getRestParameterElementType(node: any): any;
export function getRightMostAssignedExpression(node: any): any;
export function getRootDeclaration(node: any): any;
export function getRootLength(path: any): any;
export function getScriptKind(fileName: any, host: any): any;
export function getScriptKindFromFileName(fileName: any): any;
export function getSelectedModifierFlags(node: any, flags: any): any;
export function getSemanticClassifications(typeChecker: any, cancellationToken: any, sourceFile: any, classifiableNames: any, span: any): any;
export function getSetAccessorTypeAnnotationNode(accessor: any): any;
export function getShebang(text: any): any;
export function getSingleInitializerOfVariableStatementOrPropertyDeclaration(node: any): any;
export function getSnapshotText(snap: any): any;
export function getSourceFileOfNode(node: any): any;
export function getSourceFilePathInNewDir(fileName: any, host: any, newDirPath: any): any;
export function getSourceFilePathInNewDirWorker(fileName: any, newDirPath: any, currentDirectory: any, commonSourceDirectory: any, getCanonicalFileName: any): any;
export function getSourceFilesToEmit(host: any, targetSourceFile: any): any;
export function getSourceMapRange(node: any): any;
export function getSourceMapper(host: any): any;
export function getSourceTextOfNodeFromSourceFile(sourceFile: any, node: any, includeTrivia: any): any;
export function getSpanOfTokenAtPosition(sourceFile: any, pos: any): any;
export function getSpellingSuggestion(name: any, candidates: any, getName: any): any;
export function getStartPositionOfLine(line: any, sourceFile: any): any;
export function getStartPositionOfRange(range: any, sourceFile: any): any;
export function getStartsOnNewLine(node: any): any;
export function getStrictOptionValue(compilerOptions: any, flag: any): any;
export function getStringComparer(ignoreCase: any): any;
export function getSuperContainer(node: any, stopOnFunctions: any): any;
export function getSuppoertedExtensionsWithJsonIfResolveJsonModule(options: any, supportedExtensions: any): any;
export function getSupportedCodeFixes(): any;
export function getSupportedExtensions(options: any, extraFileExtensions: any): any;
export function getSwitchedType(caseClause: any, checker: any): any;
export function getSymbolId(symbol: any): any;
export function getSyntacticClassifications(cancellationToken: any, sourceFile: any, span: any): any;
export function getSynthesizedClone(node: any): any;
export function getSynthesizedDeepClone(node: any, includeTrivia: any): any;
export function getSynthesizedDeepCloneWithRenames(node: any, includeTrivia: any, renameMap: any, checker: any, callback: any): any;
export function getSynthesizedDeepClones(nodes: any, includeTrivia: any): any;
export function getSyntheticLeadingComments(node: any): any;
export function getSyntheticTrailingComments(node: any): any;
export function getTargetLabel(referenceNode: any, labelName: any): any;
export function getTargetOfBindingOrAssignmentElement(bindingElement: any): any;
export function getTextOfConstantValue(value: any): any;
export function getTextOfIdentifierOrLiteral(node: any): any;
export function getTextOfNode(node: any, includeTrivia: any): any;
export function getTextOfNodeFromSourceText(sourceText: any, node: any, includeTrivia: any): any;
export function getTextOfPropertyName(name: any): any;
export function getThisContainer(node: any, includeArrowFunctions: any): any;
export function getThisParameter(signature: any): any;
export function getTokenAtPosition(sourceFile: any, position: any): any;
export function getTokenPosOfNode(node: any, sourceFile: any, includeJsDoc: any): any;
export function getTokenSourceMapRange(node: any, token: any): any;
export function getTouchingPropertyName(sourceFile: any, position: any): any;
export function getTouchingToken(sourceFile: any, position: any, includePrecedingTokenAtEndPosition: any): any;
export function getTrailingCommentRanges(text: any, pos: any): any;
export function getTrailingSemicolonOmittingWriter(writer: any): any;
export function getTransformFlagsSubtreeExclusions(kind: any): any;
export function getTransformers(compilerOptions: any, customTransformers: any): any;
export function getTsConfigObjectLiteralExpression(tsConfigSourceFile: any): any;
export function getTsConfigPropArray(tsConfigSourceFile: any, propKey: any): any;
export function getTsConfigPropArrayElementValue(tsConfigSourceFile: any, propKey: any, elementValue: any): any;
export function getTypeAnnotationNode(node: any): any;
export function getTypeArgumentOrTypeParameterList(node: any): any;
export function getTypeParameterFromJsDoc(node: any): any;
export function getTypeParameterOwner(d: any): any;
export function getTypesPackageName(packageName: any): any;
export function getUILocale(): any;
export function getUniqueName(baseName: any, sourceFile: any): any;
export function getUniqueSymbolId(symbol: any, checker: any): any;
export function getWatchErrorSummaryDiagnosticMessage(errorCount: any): any;
export function getWatchFactory(watchLogLevel: any, log: any, getDetailWatchInfo: any): any;
export function group(values: any, getGroupId: any): any;
export function guessIndentation(lines: any): any;
export function hasChangesInResolutions(names: any, newResolutions: any, oldResolutions: any, comparer: any): any;
export function hasChildOfKind(n: any, kind: any, sourceFile: any): any;
export function hasDocComment(sourceFile: any, position: any): any;
export function hasDynamicName(declaration: any): any;
export function hasEntries(map: any): any;
export function hasExtension(fileName: any): any;
export function hasIndexSignature(type: any): any;
export function hasInitializer(node: any): any;
export function hasJSDocNodes(node: any): any;
export function hasJSDocParameterTags(node: any): any;
export function hasJSFileExtension(fileName: any): any;
export function hasJSOrJsonFileExtension(fileName: any): any;
export function hasJsonModuleEmitEnabled(options: any): any;
export function hasModifier(node: any, flags: any): any;
export function hasModifiers(node: any): any;
export function hasOnlyExpressionInitializer(node: any): any;
export function hasProperty(map: any, key: any): any;
export function hasPropertyAccessExpressionWithName(node: any, funcName: any): any;
export function hasQuestionToken(node: any): any;
export function hasReadonlyModifier(node: any): any;
export function hasRestParameter(s: any): any;
export function hasStaticModifier(node: any): any;
export function hasTSFileExtension(fileName: any): any;
export function hasTrailingDirectorySeparator(path: any): any;
export function hasType(node: any): any;
export function hasZeroOrOneAsteriskCharacter(str: any): any;
export function helperString(input: any, ...args: any[]): any;
export function hostGetCanonicalFileName(host: any): any;
export function hostUsesCaseSensitiveFileNames(host: any): any;
export function idText(identifier: any): any;
export function identifierIsThisKeyword(id: any): any;
export function identity(x: any): any;
export namespace identitySourceMapConsumer {
    function getGeneratedPosition(x: any): any;
    function getSourcePosition(x: any): any;
}
export function importFromModuleSpecifier(node: any): any;
export function indexOfAnyCharCode(text: any, charCodes: any, start: any): any;
export function indexOfNode(nodeArray: any, node: any): any;
export function inlineExpressions(expressions: any): any;
export function insertImport(changes: any, sourceFile: any, importDecl: any): void;
export function insertLeadingStatement(dest: any, source: any): any;
export function insertSorted(array: any, insert: any, compare: any): void;
export function inspectModule(fileNameToRequire: any): any;
export function inspectValue(name: any, value: any): any;
export function introducesArgumentsExoticObject(node: any): any;
export function isAbstractConstructorSymbol(symbol: any): any;
export function isAbstractConstructorType(type: any): any;
export function isAccessExpression(node: any): any;
export function isAccessibilityModifier(kind: any): any;
export function isAccessor(node: any): any;
export function isAliasSymbolDeclaration(node: any): any;
export function isAmbientModule(node: any): any;
export function isAnyImportOrReExport(node: any): any;
export function isAnyImportSyntax(node: any): any;
export function isAnySupportedFileExtension(path: any): any;
export function isArray(value: any): any;
export function isArrayBindingElement(node: any): any;
export function isArrayBindingOrAssignmentPattern(node: any): any;
export function isArrayBindingPattern(node: any): any;
export function isArrayLiteralExpression(node: any): any;
export function isArrayLiteralOrObjectLiteralDestructuringPattern(node: any): any;
export function isArrayTypeNode(node: any): any;
export function isArrowFunction(node: any): any;
export function isAsExpression(node: any): any;
export function isAssertionExpression(node: any): any;
export function isAssignmentDeclaration(decl: any): any;
export function isAssignmentExpression(node: any, excludeCompoundAssignment: any): any;
export function isAssignmentOperator(token: any): any;
export function isAssignmentPattern(node: any): any;
export function isAssignmentTarget(node: any): any;
export function isAsyncFunction(node: any): any;
export function isAwaitExpression(node: any): any;
export function isBigIntLiteral(node: any): any;
export function isBinaryExpression(node: any): any;
export function isBindableObjectDefinePropertyCall(expr: any, ...args: any[]): any;
export function isBindingElement(node: any): any;
export function isBindingName(node: any): any;
export function isBindingOrAssignmentPattern(node: any): any;
export function isBindingPattern(node: any): any;
export function isBlock(node: any): any;
export function isBlockOrCatchScoped(declaration: any): any;
export function isBlockScope(node: any, parentNode: any): any;
export function isBlockScopedContainerTopLevel(node: any): any;
export function isBreakOrContinueStatement(node: any): any;
export function isBreakStatement(node: any): any;
export function isBundle(node: any): any;
export function isCallExpression(node: any): any;
export function isCallExpressionTarget(node: any): any;
export function isCallLikeExpression(node: any): any;
export function isCallOrNewExpression(node: any): any;
export function isCallOrNewExpressionTarget(node: any): any;
export function isCallSignatureDeclaration(node: any): any;
export function isCaseBlock(node: any): any;
export function isCaseClause(node: any): any;
export function isCaseOrDefaultClause(node: any): any;
export function isCatchClause(node: any): any;
export function isCatchClauseVariableDeclarationOrBindingElement(declaration: any): any;
export function isCheckJsEnabledForFile(sourceFile: any, compilerOptions: any): any;
export function isChildOfNodeWithKind(node: any, kind: any): any;
export function isClassDeclaration(node: any): any;
export function isClassElement(node: any): any;
export function isClassExpression(node: any): any;
export function isClassLike(node: any): any;
export function isClassMemberModifier(idToken: any): any;
export function isClassOrTypeElement(node: any): any;
export function isCollapsedRange(range: any): any;
export function isCommaSequence(node: any): any;
export function isComment(kind: any): any;
export function isComputedPropertyName(node: any): any;
export function isConciseBody(node: any): any;
export function isConditionalExpression(node: any): any;
export function isConditionalTypeNode(node: any): any;
export function isConstructSignatureDeclaration(node: any): any;
export function isConstructorDeclaration(node: any): any;
export function isConstructorTypeNode(node: any): any;
export function isContextualKeyword(token: any): any;
export function isContinueStatement(node: any): any;
export function isDebuggerStatement(node: any): any;
export function isDeclaration(node: any): any;
export function isDeclarationBindingElement(bindingElement: any): any;
export function isDeclarationFileName(fileName: any): any;
export function isDeclarationName(name: any): any;
export function isDeclarationNameOfEnumOrNamespace(node: any): any;
export function isDeclarationReadonly(declaration: any): any;
export function isDeclarationStatement(node: any): any;
export function isDeclarationWithTypeParameterChildren(node: any): any;
export function isDeclarationWithTypeParameters(node: any): any;
export function isDecorator(node: any): any;
export function isDefaultClause(node: any): any;
export function isDefaultImport(node: any): any;
export function isDefaultedExpandoInitializer(node: any): any;
export function isDeleteExpression(node: any): any;
export function isDeleteTarget(node: any): any;
export function isDestructuringAssignment(node: any): any;
export function isDiskPathRoot(path: any): any;
export function isDoStatement(node: any): any;
export function isDynamicName(name: any): any;
export function isESSymbolIdentifier(node: any): any;
export function isEffectiveExternalModule(node: any, compilerOptions: any): any;
export function isEffectiveModuleDeclaration(node: any): any;
export function isElementAccessExpression(node: any): any;
export function isEmittedFileOfProgram(program: any, file: any): any;
export function isEmptyArrayLiteral(expression: any): any;
export function isEmptyBindingElement(node: any): any;
export function isEmptyBindingPattern(node: any): any;
export function isEmptyObjectLiteral(expression: any): any;
export function isEmptyStatement(node: any): any;
export function isEntityName(node: any): any;
export function isEntityNameExpression(node: any): any;
export function isEnumConst(node: any): any;
export function isEnumDeclaration(node: any): any;
export function isEnumMember(node: any): any;
export function isEqualityOperatorKind(kind: any): any;
export function isExportAssignment(node: any): any;
export function isExportDeclaration(node: any): any;
export function isExportName(node: any): any;
export function isExportSpecifier(node: any): any;
export function isExportsIdentifier(node: any): any;
export function isExportsOrModuleExportsOrAlias(sourceFile: any, node: any): any;
export function isExpression(node: any): any;
export function isExpressionNode(node: any): any;
export function isExpressionOfExternalModuleImportEqualsDeclaration(node: any): any;
export function isExpressionStatement(node: any): any;
export function isExpressionWithTypeArguments(node: any): any;
export function isExpressionWithTypeArgumentsInClassExtendsClause(node: any): any;
export function isExternalModule(file: any): any;
export function isExternalModuleAugmentation(node: any): any;
export function isExternalModuleImportEqualsDeclaration(node: any): any;
export function isExternalModuleNameRelative(moduleName: any): any;
export function isExternalModuleReference(node: any): any;
export function isExternalModuleSymbol(moduleSymbol: any): any;
export function isExternalOrCommonJsModule(file: any): any;
export function isFileLevelUniqueName(sourceFile: any, name: any, hasGlobalName: any): any;
export function isFirstDeclarationOfSymbolParameter(symbol: any): any;
export function isFixablePromiseHandler(node: any, ...args: any[]): any;
export function isForInOrOfStatement(node: any): any;
export function isForInStatement(node: any): any;
export function isForInitializer(node: any): any;
export function isForOfStatement(node: any): any;
export function isForStatement(node: any): any;
export function isFunctionBlock(node: any): any;
export function isFunctionBody(node: any): any;
export function isFunctionDeclaration(node: any): any;
export function isFunctionExpression(node: any): any;
export function isFunctionLike(node: any): any;
export function isFunctionLikeDeclaration(node: any): any;
export function isFunctionLikeKind(kind: any): any;
export function isFunctionOrConstructorTypeNode(node: any): any;
export function isFunctionOrModuleBlock(node: any): any;
export function isFunctionSymbol(symbol: any): any;
export function isFunctionTypeNode(node: any): any;
export function isGeneratedIdentifier(node: any): any;
export function isGetAccessor(node: any): any;
export function isGetAccessorDeclaration(node: any): any;
export function isGetOrSetAccessorDeclaration(node: any): any;
export function isGlobalScopeAugmentation(module: any): any;
export function isHeritageClause(node: any): any;
export function isIdentifier(node: any): any;
export function isIdentifierANonContextualKeyword(_a: any): any;
export function isIdentifierName(node: any): any;
export function isIdentifierPart(ch: any, languageVersion: any): any;
export function isIdentifierStart(ch: any, languageVersion: any): any;
export function isIdentifierText(name: any, languageVersion: any): any;
export function isIdentifierTypePredicate(predicate: any): any;
export function isIfStatement(node: any): any;
export function isImplicitGlob(lastPathComponent: any): any;
export function isImportCall(n: any): any;
export function isImportClause(node: any): any;
export function isImportDeclaration(node: any): any;
export function isImportEqualsDeclaration(node: any): any;
export function isImportOrExportSpecifier(node: any): any;
export function isImportOrExportSpecifierName(location: any): any;
export function isImportSpecifier(node: any): any;
export function isImportTypeNode(node: any): any;
export function isInComment(sourceFile: any, position: any, tokenAtPosition: any): any;
export function isInExpressionContext(node: any): any;
export function isInJSDoc(node: any): any;
export function isInJSFile(node: any): any;
export function isInJSXText(sourceFile: any, position: any): any;
export function isInJsonFile(node: any): any;
export function isInNonReferenceComment(sourceFile: any, position: any): any;
export function isInReferenceComment(sourceFile: any, position: any): any;
export function isInRightSideOfInternalImportEqualsDeclaration(node: any): any;
export function isInString(sourceFile: any, position: any, previousToken: any): any;
export function isInTemplateString(sourceFile: any, position: any): any;
export function isIndexSignatureDeclaration(node: any): any;
export function isIndexedAccessTypeNode(node: any): any;
export function isInferTypeNode(node: any): any;
export function isInsideJsxElementOrAttribute(sourceFile: any, position: any): any;
export function isInsideTemplateLiteral(node: any, position: any, sourceFile: any): any;
export function isInstantiatedModule(node: any, preserveConstEnums: any): any;
export function isInterfaceDeclaration(node: any): any;
export function isInternalModuleImportEqualsDeclaration(node: any): any;
export function isInternalName(node: any): any;
export function isIntersectionTypeNode(node: any): any;
export function isIntrinsicJsxName(name: any): any;
export function isIterationStatement(node: any, lookInLabeledStatements: any): any;
export function isJSDoc(node: any): any;
export function isJSDocAllType(node: any): any;
export function isJSDocAugmentsTag(node: any): any;
export function isJSDocCallbackTag(node: any): any;
export function isJSDocClassTag(node: any): any;
export function isJSDocCommentContainingNode(node: any): any;
export function isJSDocConstructSignature(node: any): any;
export function isJSDocEnumTag(node: any): any;
export function isJSDocFunctionType(node: any): any;
export function isJSDocIndexSignature(node: any): any;
export function isJSDocLikeText(text: any, start: any): any;
export function isJSDocNamespaceBody(node: any): any;
export function isJSDocNode(node: any): any;
export function isJSDocNonNullableType(node: any): any;
export function isJSDocNullableType(node: any): any;
export function isJSDocOptionalType(node: any): any;
export function isJSDocParameterTag(node: any): any;
export function isJSDocPropertyLikeTag(node: any): any;
export function isJSDocPropertyTag(node: any): any;
export function isJSDocReturnTag(node: any): any;
export function isJSDocSignature(node: any): any;
export function isJSDocTag(node: any): any;
export function isJSDocTemplateTag(node: any): any;
export function isJSDocThisTag(node: any): any;
export function isJSDocTypeAlias(node: any): any;
export function isJSDocTypeExpression(node: any): any;
export function isJSDocTypeLiteral(node: any): any;
export function isJSDocTypeTag(node: any): any;
export function isJSDocTypedefTag(node: any): any;
export function isJSDocUnknownType(node: any): any;
export function isJSDocVariadicType(node: any): any;
export function isJSXTagName(node: any): any;
export function isJsPrivate(name: any): any;
export function isJsonEqual(a: any, b: any): any;
export function isJsonSourceFile(file: any): any;
export function isJsxAttribute(node: any): any;
export function isJsxAttributeLike(node: any): any;
export function isJsxAttributes(node: any): any;
export function isJsxChild(node: any): any;
export function isJsxClosingElement(node: any): any;
export function isJsxClosingFragment(node: any): any;
export function isJsxElement(node: any): any;
export function isJsxExpression(node: any): any;
export function isJsxFragment(node: any): any;
export function isJsxOpeningElement(node: any): any;
export function isJsxOpeningFragment(node: any): any;
export function isJsxOpeningLikeElement(node: any): any;
export function isJsxSelfClosingElement(node: any): any;
export function isJsxSpreadAttribute(node: any): any;
export function isJsxTagNameExpression(node: any): any;
export function isJsxText(node: any): any;
export function isJumpStatementTarget(node: any): any;
export function isKeyword(token: any): any;
export function isKnownSymbol(symbol: any): any;
export function isLabelName(node: any): any;
export function isLabelOfLabeledStatement(node: any): any;
export function isLabeledStatement(node: any): any;
export function isLateVisibilityPaintedStatement(node: any): any;
export function isLeftHandSideExpression(node: any): any;
export function isLet(node: any): any;
export function isLineBreak(ch: any): any;
export function isLiteralComputedPropertyDeclarationName(node: any): any;
export function isLiteralExpression(node: any): any;
export function isLiteralImportTypeNode(n: any): any;
export function isLiteralKind(kind: any): any;
export function isLiteralNameOfPropertyDeclarationOrIndexAccess(node: any): any;
export function isLiteralTypeNode(node: any): any;
export function isLocalName(node: any): any;
export function isLogicalOperator(token: any): any;
export function isMappedTypeNode(node: any): any;
export function isMemberSymbolInBaseType(memberSymbol: any, checker: any): any;
export function isMetaProperty(node: any): any;
export function isMethodDeclaration(node: any): any;
export function isMethodOrAccessor(node: any): any;
export function isMethodSignature(node: any): any;
export function isMissingDeclaration(node: any): any;
export function isModifier(node: any): any;
export function isModifierKind(token: any): any;
export function isModuleAugmentationExternal(node: any): any;
export function isModuleBlock(node: any): any;
export function isModuleBody(node: any): any;
export function isModuleDeclaration(node: any): any;
export function isModuleExportsPropertyAccessExpression(node: any): any;
export function isModuleOrEnumDeclaration(node: any): any;
export function isModuleReference(node: any): any;
export function isModuleWithStringLiteralName(node: any): any;
export function isNameOfFunctionDeclaration(node: any): any;
export function isNameOfModuleDeclaration(node: any): any;
export function isNamedDeclaration(node: any): any;
export function isNamedExports(node: any): any;
export function isNamedImportBindings(node: any): any;
export function isNamedImports(node: any): any;
export function isNamedImportsOrExports(node: any): any;
export function isNamespaceBody(node: any): any;
export function isNamespaceExportDeclaration(node: any): any;
export function isNamespaceImport(node: any): any;
export function isNewExpression(node: any): any;
export function isNewExpressionTarget(node: any): any;
export function isNoSubstitutionTemplateLiteral(node: any): any;
export function isNode(node: any): any;
export function isNodeArray(array: any): any;
export function isNodeDescendantOf(node: any, ancestor: any): any;
export function isNodeKind(kind: any): any;
export function isNodeWithPossibleHoistedDeclaration(node: any): any;
export function isNonContextualKeyword(token: any): any;
export function isNonGlobalAmbientModule(node: any): any;
export function isNonNullExpression(node: any): any;
export function isNotEmittedOrPartiallyEmittedNode(node: any): any;
export function isNotEmittedStatement(node: any): any;
export function isNumber(x: any): any;
export function isNumericLiteral(node: any): any;
export function isObjectBindingElementWithoutPropertyName(bindingElement: any): any;
export function isObjectBindingOrAssignmentPattern(node: any): any;
export function isObjectBindingPattern(node: any): any;
export function isObjectLiteralElement(node: any): any;
export function isObjectLiteralElementLike(node: any): any;
export function isObjectLiteralExpression(node: any): any;
export function isObjectLiteralMethod(node: any): any;
export function isObjectLiteralOrClassExpressionMethod(node: any): any;
export function isObjectTypeDeclaration(node: any): any;
export function isOctalDigit(ch: any): any;
export function isOmittedExpression(node: any): any;
export function isOuterExpression(node: any, kinds: any): any;
export function isParameter(node: any): any;
export function isParameterDeclaration(node: any): any;
export function isParameterPropertyDeclaration(node: any): any;
export function isParameterPropertyModifier(kind: any): any;
export function isParenthesizedExpression(node: any): any;
export function isParenthesizedTypeNode(node: any): any;
export function isParseTreeNode(node: any): any;
export function isPartOfTypeNode(node: any): any;
export function isPartiallyEmittedExpression(node: any): any;
export function isPathInNodeModulesStartingWithDot(path: any): any;
export function isPinnedComment(text: any, start: any): any;
export function isPossiblyTypeArgumentPosition(token: any, sourceFile: any, checker: any): any;
export function isPostfixUnaryExpression(node: any): any;
export function isPrefixUnaryExpression(node: any): any;
export function isProgramUptoDate(program: any, rootFileNames: any, newOptions: any, getSourceVersion: any, fileExists: any, hasInvalidatedResolution: any, hasChangedAutomaticTypeDirectiveNames: any, projectReferences: any): any;
export function isPrologueDirective(node: any): any;
export function isPropertyAccessEntityNameExpression(node: any): any;
export function isPropertyAccessExpression(node: any): any;
export function isPropertyAccessOrQualifiedName(node: any): any;
export function isPropertyAccessOrQualifiedNameOrImportTypeNode(node: any): any;
export function isPropertyAssignment(node: any): any;
export function isPropertyDeclaration(node: any): any;
export function isPropertyName(node: any): any;
export function isPropertyNameLiteral(node: any): any;
export function isPropertySignature(node: any): any;
export function isPrototypeAccess(node: any): any;
export function isPrototypePropertyAssignment(node: any): any;
export function isPunctuation(kind: any): any;
export function isPushOrUnshiftIdentifier(node: any): any;
export function isQualifiedName(node: any): any;
export function isRawSourceMap(x: any): any;
export function isRecognizedTripleSlashComment(text: any, commentPos: any, commentEnd: any): any;
export function isRegularExpressionLiteral(node: any): any;
export function isRequireCall(callExpression: any, checkArgumentIsStringLiteralLike: any, ...args: any[]): any;
export function isRestParameter(node: any): any;
export function isReturnStatement(node: any): any;
export function isReturnStatementWithFixablePromiseHandler(node: any): any;
export function isRightSideOfPropertyAccess(node: any): any;
export function isRightSideOfQualifiedName(node: any): any;
export function isRightSideOfQualifiedNameOrPropertyAccess(node: any): any;
export function isRootedDiskPath(path: any): any;
export function isSemicolonClassElement(node: any): any;
export function isSetAccessor(node: any): any;
export function isSetAccessorDeclaration(node: any): any;
export function isShorthandAmbientModuleSymbol(moduleSymbol: any): any;
export function isShorthandPropertyAssignment(node: any): any;
export function isSimpleCopiableExpression(expression: any): any;
export function isSingleOrDoubleQuote(charCode: any): any;
export function isSourceFile(node: any): any;
export function isSourceFileJS(file: any): any;
export function isSourceFileNotJS(file: any): any;
export function isSourceMapping(mapping: any): any;
export function isSpecialPropertyDeclaration(expr: any): any;
export function isSpreadAssignment(node: any): any;
export function isSpreadElement(node: any): any;
export function isStatement(node: any): any;
export function isStatementButNotDeclaration(node: any): any;
export function isStatementWithLocals(node: any): any;
export function isString(text: any): any;
export function isStringANonContextualKeyword(name: any): any;
export function isStringDoubleQuoted(str: any, sourceFile: any): any;
export function isStringLiteral(node: any): any;
export function isStringLiteralLike(node: any): any;
export function isStringLiteralOrJsxExpression(node: any): any;
export function isStringLiteralOrTemplate(node: any): any;
export function isStringOrNumericLiteralLike(node: any): any;
export function isStringOrRegularExpressionOrTemplateLiteral(kind: any): any;
export function isStringTextContainingNode(node: any): any;
export function isSuperCall(n: any): any;
export function isSuperProperty(node: any): any;
export function isSupportedSourceFileName(fileName: any, compilerOptions: any, extraFileExtensions: any): any;
export function isSwitchStatement(node: any): any;
export function isSyntaxList(n: any): any;
export function isTagName(node: any): any;
export function isTaggedTemplateExpression(node: any): any;
export function isTemplateExpression(node: any): any;
export function isTemplateHead(node: any): any;
export function isTemplateLiteral(node: any): any;
export function isTemplateLiteralKind(kind: any): any;
export function isTemplateLiteralToken(node: any): any;
export function isTemplateMiddle(node: any): any;
export function isTemplateMiddleOrTemplateTail(node: any): any;
export function isTemplateSpan(node: any): any;
export function isTemplateTail(node: any): any;
export function isThis(node: any): any;
export function isThisIdentifier(node: any): any;
export function isThisProperty(node: any): any;
export function isThisTypeNode(node: any): any;
export function isThisTypePredicate(predicate: any): any;
export function isThrowStatement(node: any): any;
export function isToken(n: any): any;
export function isTraceEnabled(compilerOptions: any, host: any): any;
export function isTrivia(token: any): any;
export function isTryStatement(node: any): any;
export function isTupleTypeNode(node: any): any;
export function isTypeAlias(node: any): any;
export function isTypeAliasDeclaration(node: any): any;
export function isTypeAssertion(node: any): any;
export function isTypeElement(node: any): any;
export function isTypeKeyword(kind: any): any;
export function isTypeLiteralNode(node: any): any;
export function isTypeNode(node: any): any;
export function isTypeNodeKind(kind: any): any;
export function isTypeOfExpression(node: any): any;
export function isTypeOperatorNode(node: any): any;
export function isTypeParameterDeclaration(node: any): any;
export function isTypePredicateNode(node: any): any;
export function isTypeQueryNode(node: any): any;
export function isTypeReferenceNode(node: any): any;
export function isTypeReferenceType(node: any): any;
export function isUMDExportSymbol(symbol: any): any;
export function isUnaryExpression(node: any): any;
export function isUnaryExpressionWithWrite(expr: any): any;
export function isUnicodeIdentifierStart(code: any, languageVersion: any): any;
export function isUnionTypeNode(node: any): any;
export function isUnparsedSource(node: any): any;
export function isUrl(path: any): any;
export function isValidESSymbolDeclaration(node: any): any;
export function isValueSignatureDeclaration(node: any): any;
export function isVarConst(node: any): any;
export function isVariableDeclaration(node: any): any;
export function isVariableDeclarationInVariableStatement(node: any): any;
export function isVariableDeclarationList(node: any): any;
export function isVariableLike(node: any): any;
export function isVariableLikeOrAccessor(node: any): any;
export function isVariableStatement(node: any): any;
export function isVoidExpression(node: any): any;
export function isWatchSet(options: any): any;
export function isWellKnownSymbolSyntactically(node: any): any;
export function isWhileStatement(node: any): any;
export function isWhiteSpaceLike(ch: any): any;
export function isWhiteSpaceSingleLine(ch: any): any;
export function isWithStatement(node: any): any;
export function isWriteAccess(node: any): any;
export function isWriteOnlyAccess(node: any): any;
export function isYieldExpression(node: any): any;
export function keywordPart(kind: any): any;
export function last(array: any): any;
export function lastOrUndefined(array: any): any;
export function length(array: any): any;
export const libMap: Map;
export const libs: string[];
export function liftToBlock(nodes: any): any;
export function lineBreakPart(): any;
export function loadModuleFromGlobalCache(moduleName: any, projectName: any, compilerOptions: any, host: any, globalCache: any): any;
export function makeIdentifierFromModuleName(moduleName: any): any;
export function makeImport(defaultImport: any, namedImports: any, moduleSpecifier: any, quotePreference: any): any;
export function makeImportIfNecessary(defaultImport: any, namedImports: any, moduleSpecifier: any, quotePreference: any): any;
export function makeStringLiteral(text: any, quotePreference: any): any;
export function mangleScopedPackageName(packageName: any): any;
export function map(array: any, f: any): any;
export function mapAllOrFail(array: any, mapFn: any): any;
export function mapDefined(array: any, mapFn: any): any;
export function mapDefinedIterator(iter: any, mapFn: any): any;
export function mapEntries(map: any, f: any): any;
export function mapIterator(iter: any, mapFn: any): any;
export function mapToDisplayParts(writeDisplayParts: any): any;
export function matchFiles(path: any, extensions: any, excludes: any, includes: any, useCaseSensitiveFileNames: any, currentDirectory: any, depth: any, getFileSystemEntries: any): any;
export function matchPatternOrExact(patternStrings: any, candidate: any): any;
export function matchedText(pattern: any, candidate: any): any;
export const maxNumberOfFilesToIterateForInvalidation: number;
export function maybeBind(obj: any, fn: any): any;
export function memoize(callback: any): any;
export function mergeLexicalEnvironment(statements: any, declarations: any): any;
export function min(a: any, b: any, compare: any): any;
export function minAndMax(arr: any, getValue: any): any;
export const missingFileModifiedTime: Date;
export function modifierToFlag(token: any): any;
export function moduleResolutionIsEqualTo(oldResolution: any, newResolution: any): any;
export const moduleResolutionOptionDeclarations: {
    affectsModuleResolution: boolean;
    affectsSourceFile: boolean;
    category: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    description: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    name: string;
    paramType: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    shortName: string;
    showInSimplifiedHelpView: boolean;
    type: Map;
}[];
export namespace moduleSpecifiers {
    function countPathComponents(path: any): any;
    function getModuleSpecifier(compilerOptions: any, importingSourceFile: any, importingSourceFileName: any, toFileName: any, host: any, files: any, preferences: any, redirectTargetsMap: any): any;
    function getModuleSpecifiers(moduleSymbol: any, compilerOptions: any, importingSourceFile: any, host: any, files: any, userPreferences: any, redirectTargetsMap: any): any;
    function updateModuleSpecifier(compilerOptions: any, importingSourceFileName: any, toFileName: any, host: any, files: any, redirectTargetsMap: any, oldImportSpecifier: any): any;
}
export function moveEmitHelpers(source: any, target: any, predicate: any): void;
export function moveRangeEnd(range: any, end: any): any;
export function moveRangePastDecorators(node: any): any;
export function moveRangePastModifiers(node: any): any;
export function moveRangePos(range: any, pos: any): any;
export function moveSyntheticComments(node: any, original: any): any;
export function mutateMap(map: any, newMap: any, options: any): void;
export function noEmitNotification(hint: any, node: any, callback: any): void;
export function noEmitSubstitution(_hint: any, node: any): any;
export function nodeCanBeDecorated(node: any, parent: any, grandparent: any): any;
export function nodeIsDecorated(node: any, parent: any, grandparent: any): any;
export function nodeIsMissing(node: any): any;
export function nodeIsPresent(node: any): any;
export function nodeIsSynthesized(range: any): any;
export function nodeModuleNameResolver(moduleName: any, containingFile: any, compilerOptions: any, host: any, cache: any, redirectedReference: any, lookupConfig: any): any;
export const nodeModulesPathPart: string;
export function nodeOrChildIsDecorated(node: any, parent: any, grandparent: any): any;
export function nodeOverlapsWithStartEnd(node: any, sourceFile: any, start: any, end: any): any;
export function nodePosToString(node: any): any;
export function nodeSeenTracker(): any;
export function nodeStartsNewLexicalEnvironment(node: any): any;
export function noop(_: any): void;
export function normalizePath(path: any): any;
export function normalizePathAndParts(path: any): any;
export function normalizeSlashes(path: any): any;
export function notImplemented(): void;
export namespace nullTransformationContext {
    function addDiagnostic(_: any): void;
    function enableEmitNotification(_: any): void;
    function enableSubstitution(_: any): void;
    function endLexicalEnvironment(): any;
    function getCompilerOptions(): void;
    function getEmitHost(): void;
    function getEmitResolver(): void;
    function hoistFunctionDeclaration(_: any): void;
    function hoistVariableDeclaration(_: any): void;
    function isEmitNotificationEnabled(): void;
    function isSubstitutionEnabled(): void;
    function onEmitNode(_: any): void;
    function onSubstituteNode(): void;
    function readEmitHelpers(): void;
    function requestEmitHelper(_: any): void;
    function resumeLexicalEnvironment(_: any): void;
    function startLexicalEnvironment(_: any): void;
    function suspendLexicalEnvironment(_: any): void;
}
export namespace objectAllocator {
    function getIdentifierConstructor(): any;
    function getNodeConstructor(): any;
    function getSignatureConstructor(): any;
    function getSourceFileConstructor(): any;
    function getSourceMapSourceConstructor(): any;
    function getSymbolConstructor(): any;
    function getTokenConstructor(): any;
    function getTypeConstructor(): any;
}
export function onWatchedFileStat(watchedFile: any, modifiedTime: any): any;
export function operatorPart(kind: any): any;
export const optionDeclarations: {
    category: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    description: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    name: string;
    shortName: string;
    showInSimplifiedHelpView: boolean;
    type: string;
}[];
export function or(f: any, g: any): any;
export function orderedRemoveItem(array: any, item: any): any;
export function orderedRemoveItemAt(array: any, index: any): void;
export function packageIdToString(_a: any): any;
export function parameterIsThisKeyword(parameter: any): any;
export function parenthesizeArrayTypeMember(member: any): any;
export function parenthesizeBinaryOperand(binaryOperator: any, operand: any, isLeftSideOfBinary: any, leftOperand: any): any;
export function parenthesizeConciseBody(body: any): any;
export function parenthesizeConditionalTypeMember(member: any): any;
export function parenthesizeDefaultExpression(e: any): any;
export function parenthesizeElementTypeMember(member: any): any;
export function parenthesizeElementTypeMembers(members: any): any;
export function parenthesizeExpressionForExpressionStatement(expression: any): any;
export function parenthesizeExpressionForList(expression: any): any;
export function parenthesizeForAccess(expression: any, ...args: any[]): any;
export function parenthesizeForConditionalHead(condition: any): any;
export function parenthesizeForNew(expression: any, ...args: any[]): any;
export function parenthesizeListElements(elements: any): any;
export function parenthesizePostfixOperand(operand: any): any;
export function parenthesizePrefixOperand(operand: any): any;
export function parenthesizeSubexpressionOfConditionalExpression(e: any): any;
export function parenthesizeTypeParameters(typeParameters: any): any;
export function parseBuildCommand(args: any): any;
export function parseCommandLine(commandLine: any, readFile: any): any;
export function parseConfigFileTextToJson(fileName: any, jsonText: any): any;
export function parseConfigFileWithSystem(configFileName: any, optionsToExtend: any, system: any, reportDiagnostic: any): any;
export function parseConfigHostFromCompilerHostLike(host: any, directoryStructureHost: any): any;
export function parseCustomTypeOption(opt: any, value: any, errors: any): any;
export function parseIsolatedEntityName(text: any, languageVersion: any): any;
export function parseIsolatedJSDocComment(content: any, start: any, length: any): any;
export function parseJSDocTypeExpressionForTests(content: any, start: any, length: any): any;
export function parseJsonConfigFileContent(json: any, host: any, basePath: any, existingOptions: any, configFileName: any, resolutionStack: any, extraFileExtensions: any): any;
export function parseJsonSourceFileConfigFileContent(sourceFile: any, host: any, basePath: any, existingOptions: any, configFileName: any, resolutionStack: any, extraFileExtensions: any): any;
export function parseJsonText(fileName: any, sourceText: any): any;
export function parseListTypeOption(opt: any, value: any, errors: any): any;
export function parsePackageName(moduleName: any): any;
export function parsePseudoBigInt(stringValue: any): any;
export function pathContainsNodeModules(path: any): any;
export function pathIsRelative(path: any): any;
export function patternText(_a: any): any;
export namespace performance {
    function createTimer(measureName: any, startMarkName: any, endMarkName: any): any;
    function createTimerIf(condition: any, measureName: any, startMarkName: any, endMarkName: any): any;
    function disable(): void;
    function enable(): void;
    function forEachMeasure(cb: any): void;
    function getCount(markName: any): any;
    function getDuration(measureName: any): any;
    function mark(markName: any): void;
    function measure(measureName: any, startMarkName: any, endMarkName: any): void;
    namespace nullTimer {
        function enter(_: any): void;
        function exit(_: any): void;
    }
}
export function positionBelongsToNode(candidate: any, position: any, sourceFile: any): any;
export function positionIsSynthesized(pos: any): any;
export function positionsAreOnSameLine(pos1: any, pos2: any, sourceFile: any): any;
export function preProcessFile(sourceText: any, readImportFiles: any, detectJavaScriptImports: any): any;
export function printHelp(optionsList: any, syntaxPrefix: any): void;
export function printVersion(): void;
export function processCommentPragmas(context: any, sourceText: any): void;
export function processPragmasIntoFields(context: any, reportDiagnostic: any): void;
export function programContainsEs6Modules(program: any): any;
export function projectReferenceIsEqualTo(oldRef: any, newRef: any): any;
export function pseudoBigIntToString(_a: any): any;
export function punctuationPart(kind: any): any;
export function pushIfUnique(array: any, toAdd: any, equalityComparer: any): any;
export function quote(text: any, preferences: any): any;
export function quotePreferenceFromString(str: any, sourceFile: any): any;
export function rangeContainsPosition(r: any, pos: any): any;
export function rangeContainsPositionExclusive(r: any, pos: any): any;
export function rangeContainsRange(r1: any, r2: any): any;
export function rangeContainsRangeExclusive(r1: any, r2: any): any;
export function rangeContainsStartEnd(range: any, start: any, end: any): any;
export function rangeEndIsOnSameLineAsRangeStart(range1: any, range2: any, sourceFile: any): any;
export function rangeEndPositionsAreOnSameLine(range1: any, range2: any, sourceFile: any): any;
export function rangeEquals(array1: any, array2: any, pos: any, end: any): any;
export function rangeIsOnSingleLine(range: any, sourceFile: any): any;
export function rangeOfNode(node: any): any;
export function rangeOfTypeParameters(typeParameters: any): any;
export function rangeOverlapsWithStartEnd(r1: any, start: any, end: any): any;
export function rangeStartIsOnSameLineAsRangeEnd(range1: any, range2: any, sourceFile: any): any;
export function rangeStartPositionsAreOnSameLine(range1: any, range2: any, sourceFile: any): any;
export function readConfigFile(fileName: any, readFile: any): any;
export function readJson(path: any, host: any): any;
export function readJsonConfigFile(fileName: any, readFile: any): any;
export function realizeDiagnostics(diagnostics: any, newLine: any): any;
export function recreateOuterExpressions(outerExpression: any, innerExpression: any, kinds: any): any;
export function reduceEachChild(node: any, initial: any, cbNode: any, cbNodeArray: any, ...args: any[]): any;
export function reduceEachLeadingCommentRange(text: any, pos: any, cb: any, state: any, initial: any): any;
export function reduceEachTrailingCommentRange(text: any, pos: any, cb: any, state: any, initial: any): any;
export function reduceLeft(array: any, f: any, initial: any, start: any, count: any, ...args: any[]): any;
export function reducePathComponents(components: any): any;
export namespace refactor {
    const addOrRemoveBracesToArrowFunction: {};
    namespace extractSymbol {
        const Messages: {
            cannotAccessVariablesFromNestedScopes: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractAmbientBlock: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractEmpty: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractExportedEntity: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractIdentifier: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractImport: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractRange: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractRangeContainingConditionalBreakOrContinueStatements: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractRangeContainingConditionalReturnStatement: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractRangeContainingLabeledBreakOrContinueStatementWithTargetOutsideOfTheRange: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractRangeThatContainsWritesToReferencesLocatedOutsideOfTheTargetRangeInGenerators: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractReadonlyPropertyInitializerOutsideConstructor: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractSuper: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractToExpressionArrowFunction: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractToJSClass: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotExtractToOtherFunctionLike: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            cannotWriteInExpression: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            expressionExpected: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            functionWillNotBeVisibleInTheNewScope: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            statementOrExpressionExpected: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            typeWillNotBeVisibleInTheNewScope: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
            uselessConstantType: {
                category: any;
                code: any;
                key: any;
                message: any;
            };
        };
        function getAvailableActions(context: any): any;
        function getEditsForAction(context: any, actionName: any): any;
        function getRangeToExtract(sourceFile: any, span: any): any;
    }
    const generateGetAccessorAndSetAccessor: {};
    function getApplicableRefactors(context: any): any;
    function getEditsForRefactor(context: any, refactorName: any, actionName: any): any;
    function registerRefactor(name: any, refactor: any): void;
}
export function regExpEscape(text: any): any;
export function relativeComplement(arrayA: any, arrayB: any, comparer: any): any;
export function removeEmitHelper(node: any, helper: any): any;
export function removeExtension(path: any, extension: any): any;
export function removeFileExtension(path: any): any;
export function removeMinAndVersionNumbers(fileName: any): any;
export function removePrefix(str: any, prefix: any): any;
export function removeSuffix(str: any, suffix: any): any;
export function removeTrailingDirectorySeparator(path: any): any;
export function repeatString(str: any, count: any): any;
export function replaceElement(array: any, index: any, value: any): any;
export function resolutionExtensionIsTSOrJson(ext: any): any;
export function resolveConfigFileProjectName(project: any): any;
export function resolveJSModule(moduleName: any, initialDir: any, host: any): any;
export function resolveModuleName(moduleName: any, containingFile: any, compilerOptions: any, host: any, cache: any, redirectedReference: any): any;
export function resolveModuleNameFromCache(moduleName: any, containingFile: any, cache: any): any;
export function resolvePath(path: any, ...args: any[]): any;
export function resolveProjectReferencePath(hostOrRef: any, ref: any): any;
export function resolveTripleslashReference(moduleName: any, containingFile: any): any;
export function resolveTypeReferenceDirective(typeReferenceDirectiveName: any, containingFile: any, options: any, host: any, redirectedReference: any): any;
export const resolvingEmptyArray: any[];
export function restoreEnclosingLabel(node: any, outermostLabeledStatement: any, afterRestoreLabelCallback: any): any;
export function returnFalse(): any;
export function returnTrue(): any;
export function sameFlatMap(array: any, mapfn: any): any;
export function sameMap(array: any, f: any): any;
export function sameMapping(left: any, right: any): any;
export namespace scanner {
    function getStartPos(): any;
    function getText(): any;
    function getTextPos(): any;
    function getToken(): any;
    function getTokenFlags(): any;
    function getTokenPos(): any;
    function getTokenText(): any;
    function getTokenValue(): any;
    function hasExtendedUnicodeEscape(): any;
    function hasPrecedingLineBreak(): any;
    function isIdentifier(): any;
    function isReservedWord(): any;
    function isUnterminated(): any;
    function lookAhead(callback: any): any;
    function reScanGreaterToken(): any;
    function reScanJsxToken(): any;
    function reScanLessThanToken(): any;
    function reScanSlashToken(): any;
    function reScanTemplateToken(): any;
    function scan(): any;
    function scanJSDocToken(): any;
    function scanJsxAttributeValue(): any;
    function scanJsxIdentifier(): any;
    function scanJsxToken(): any;
    function scanRange(start: any, length: any, callback: any): any;
    function setInJSDocType(inType: any): void;
    function setLanguageVariant(variant: any): void;
    function setOnError(errorCallback: any): void;
    function setScriptTarget(scriptTarget: any): void;
    function setText(newText: any, start: any, length: any): void;
    function setTextPos(textPos: any): void;
    function tryScan(callback: any): any;
}
export const screenStartingMessageCodes: number[];
export function scriptKindIs(fileName: any, host: any, ...args: any[]): any;
export const semanticDiagnosticsOptionDeclarations: {
    affectsSemanticDiagnostics: boolean;
    category: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    description: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    name: string;
    showInSimplifiedHelpView: boolean;
    strictFlag: boolean;
    type: string;
}[];
export namespace server {
    const ActionInvalidate: string;
    const ActionPackageInstalled: string;
    const ActionSet: string;
    const ActionValueInspected: string;
    const Arguments: {
        EnableTelemetry: string;
        GlobalCacheLocation: string;
        LogFile: string;
        NpmLocation: string;
        TypesMapLocation: string;
        TypingSafeListLocation: string;
    };
    const EventBeginInstallTypes: string;
    const EventEndInstallTypes: string;
    const EventInitializationFailed: string;
    const EventTypesRegistry: string;
    function findArgument(argumentName: any): any;
    function hasArgument(argumentName: any): any;
    function nowString(): any;
}
export const servicesVersion: string;
export function setCommentRange(node: any, range: any): any;
export function setConfigFileInOptions(options: any, configFile: any): void;
export function setConstantValue(node: any, value: any): any;
export function setCustomPollingValues(system: any): void;
export function setEmitFlags(node: any, emitFlags: any): any;
export function setOriginalNode(node: any, original: any): any;
export function setResolvedModule(sourceFile: any, moduleNameText: any, resolvedModule: any): void;
export function setResolvedTypeReferenceDirective(sourceFile: any, typeReferenceDirectiveName: any, resolvedTypeReferenceDirective: any): void;
export function setSourceMapRange(node: any, range: any): any;
export function setStackTraceLimit(): void;
export function setStartsOnNewLine(node: any, newLine: any): any;
export function setSyntheticLeadingComments(node: any, comments: any): any;
export function setSyntheticTrailingComments(node: any, comments: any): any;
export function setTextRange(range: any, location: any): any;
export function setTokenSourceMapRange(node: any, token: any, range: any): any;
export function setUILocale(value: any): void;
export function showModuleSpecifier(_a: any): any;
export function signatureToDisplayParts(typechecker: any, signature: any, enclosingDeclaration: any, flags: any): any;
export function singleElementArray(t: any): any;
export function singleIterator(value: any): any;
export function singleOrMany(array: any): any;
export function singleOrUndefined(array: any): any;
export function skipAlias(symbol: any, checker: any): any;
export function skipAssertions(node: any): any;
export function skipConstraint(type: any): any;
export function skipOuterExpressions(node: any, kinds: any): any;
export function skipParentheses(node: any): any;
export function skipPartiallyEmittedExpressions(node: any): any;
export function skipTrivia(text: any, pos: any, stopAfterLineBreak: any, stopAtComments: any): any;
export function skipTypeChecking(sourceFile: any, options: any): any;
export function sliceAfter(arr: any, value: any): any;
export function some(array: any, predicate: any): any;
export function sort(array: any, comparer: any): any;
export function sortAndDeduplicate(array: any, comparer: any, equalityComparer: any): any;
export function sortAndDeduplicateDiagnostics(diagnostics: any): any;
export const sourceFileAffectingCompilerOptions: {
    affectsModuleResolution: boolean;
    affectsSourceFile: boolean;
    category: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    description: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    name: string;
    paramType: {
        category: number;
        code: number;
        key: string;
        message: string;
        reportsUnnecessary: any;
    };
    shortName: string;
    showInSimplifiedHelpView: boolean;
    type: Map;
}[];
export function sourceFileMayBeEmitted(sourceFile: any, options: any, isSourceFileFromExternalLibrary: any): any;
export function spacePart(): any;
export function spanMap(array: any, keyfn: any, mapfn: any): any;
export function stableSort(array: any, comparer: any): any;
export function startEndContainsRange(start: any, end: any, range: any): any;
export function startEndOverlapsWithStartEnd(start1: any, end1: any, start2: any, end2: any): any;
export function startOnNewLine(node: any): any;
export function startsWith(str: any, prefix: any): any;
export function startsWithDirectory(fileName: any, directoryName: any, getCanonicalFileName: any): any;
export function startsWithQuote(name: any): any;
export function startsWithUseStrict(statements: any): any;
export function stringContains(str: any, substring: any): any;
export function stringToToken(s: any): any;
export function stripQuotes(name: any): any;
export function sum(array: any, prop: any): any;
export const supportedJSAndJsonExtensions: string[];
export const supportedJSExtensions: string[];
export const supportedTSExtensions: string[];
export const supportedTSExtensionsForExtractExtension: string[];
export const supportedTSExtensionsWithJson: string[];
export function suppressLeadingAndTrailingTrivia(node: any): void;
export function suppressLeadingTrivia(node: any): void;
export function suppressTrailingTrivia(node: any): void;
export function symbolEscapedNameNoDefault(symbol: any): any;
export function symbolName(symbol: any): any;
export function symbolNameNoDefault(symbol: any): any;
export function symbolPart(text: any, symbol: any): any;
export function symbolToDisplayParts(typeChecker: any, symbol: any, enclosingDeclaration: any, meaning: any, flags: any): any;
export namespace sys {
    const args: string[];
    function base64decode(input: any): any;
    function base64encode(input: any): any;
    function bufferFrom(input: any, encoding: any): any;
    function clearScreen(): void;
    function clearTimeout(timer: any): void;
    function createDirectory(directoryName: any): void;
    function createHash(data: any): any;
    function createSHA256Hash(data: any): any;
    const debugMode: boolean;
    function deleteFile(path: any): any;
    function directoryExists(path: any): any;
    function exit(exitCode: any): void;
    function fileExists(path: any): any;
    function getCurrentDirectory(): any;
    function getDirectories(path: any): any;
    function getEnvironmentVariable(name: any): any;
    function getExecutingFilePath(): any;
    function getFileSize(path: any): any;
    function getMemoryUsage(): any;
    function getModifiedTime(path: any): any;
    const newLine: string;
    function readDirectory(path: any, extensions: any, excludes: any, includes: any, depth: any): any;
    function readFile(fileName: any, _encoding: any): any;
    function realpath(path: any): any;
    function resolvePath(path: any): any;
    function setBlocking(): void;
    function setModifiedTime(path: any, time: any): void;
    function setTimeout(callback: any, after: any, arg1: any, arg2: any, arg3: any, ...args: any[]): any;
    function tryEnableSourceMapsForHost(): void;
    const useCaseSensitiveFileNames: boolean;
    function watchDirectory(directoryName: any, callback: any, recursive: any): any;
    function watchFile(fileName: any, callback: any): any;
    function write(s: any): void;
    function writeFile(path: any, data: any, writeBom: any): void;
    function writeOutputIsTTY(): any;
}
export function tagNamesAreEquivalent(lhs: any, rhs: any): any;
export const testFormatSettings: {
    convertTabsToSpaces: boolean;
    indentSize: number;
    indentStyle: number;
    insertSpaceAfterCommaDelimiter: boolean;
    insertSpaceAfterConstructor: boolean;
    insertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean;
    insertSpaceAfterKeywordsInControlFlowStatements: boolean;
    insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: boolean;
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: boolean;
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: boolean;
    insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean;
    insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: boolean;
    insertSpaceAfterSemicolonInForStatements: boolean;
    insertSpaceBeforeAndAfterBinaryOperators: boolean;
    insertSpaceBeforeFunctionParenthesis: boolean;
    newLineCharacter: string;
    placeOpenBraceOnNewLineForControlBlocks: boolean;
    placeOpenBraceOnNewLineForFunctions: boolean;
    tabSize: number;
};
export function textChangeRangeIsUnchanged(range: any): any;
export function textChangeRangeNewSpan(range: any): any;
export namespace textChanges {
    class ChangeTracker {
        static fromContext(context: any): any;
        constructor(newLineCharacter: any, formatContext: any);
        newLineCharacter: any;
        formatContext: any;
        changes: any;
        newFiles: any;
        classesWithNodesInsertedAtStart: any;
        deletedNodes: any;
        createNewFile(oldFile: any, fileName: any, statements: any): void;
        deleteModifier(sourceFile: any, modifier: any): void;
        deleteNodeRange(sourceFile: any, startNode: any, endNode: any, options: any): void;
        deleteNodeRangeExcludingEnd(sourceFile: any, startNode: any, afterEndNode: any, options: any): void;
        deleteRange(sourceFile: any, range: any): void;
        finishClassesWithNodesInsertedAtStart(): void;
        finishDeleteDeclarations(): void;
        getChanges(validate: any): any;
        getInsertNodeAfterOptions(sourceFile: any, after: any): any;
        getInsertNodeAfterOptionsWorker(node: any): any;
        getInsertNodeAtStartPrefixSuffix(sourceFile: any, cls: any): any;
        getOptionsForInsertNodeBefore(before: any, doubleNewlines: any): any;
        insertCommentBeforeLine(sourceFile: any, lineNumber: any, position: any, commentText: any): void;
        insertExportModifier(sourceFile: any, node: any): void;
        insertJsdocCommentBefore(sourceFile: any, node: any, tag: any): void;
        insertLastModifierBefore(sourceFile: any, modifier: any, before: any): void;
        insertModifierBefore(sourceFile: any, modifier: any, before: any): void;
        insertName(sourceFile: any, node: any, name: any): void;
        insertNodeAfter(sourceFile: any, after: any, newNode: any): void;
        insertNodeAfterComma(sourceFile: any, after: any, newNode: any): void;
        insertNodeAfterWorker(sourceFile: any, after: any, newNode: any): any;
        insertNodeAt(sourceFile: any, pos: any, newNode: any, options: any): void;
        insertNodeAtClassStart(sourceFile: any, cls: any, newElement: any): void;
        insertNodeAtConstructorEnd(sourceFile: any, ctr: any, newStatement: any): void;
        insertNodeAtConstructorStart(sourceFile: any, ctr: any, newStatement: any): void;
        insertNodeAtEndOfList(sourceFile: any, list: any, newNode: any): void;
        insertNodeAtEndOfScope(sourceFile: any, scope: any, newNode: any): void;
        insertNodeAtObjectStart(sourceFile: any, obj: any, newElement: any): void;
        insertNodeAtStartWorker(sourceFile: any, cls: any, newElement: any): void;
        insertNodeAtTopOfFile(sourceFile: any, newNode: any, blankLineBetween: any): void;
        insertNodeBefore(sourceFile: any, before: any, newNode: any, blankLineBetween: any): void;
        insertNodeInListAfter(sourceFile: any, after: any, newNode: any, containingList: any): void;
        insertNodesAfter(sourceFile: any, after: any, newNodes: any): void;
        insertNodesAt(sourceFile: any, pos: any, newNodes: any, options: any): void;
        insertText(sourceFile: any, pos: any, text: any): void;
        insertTypeParameters(sourceFile: any, node: any, typeParameters: any): void;
        nextCommaToken(sourceFile: any, node: any): any;
        replaceConstructorBody(sourceFile: any, ctr: any, statements: any): void;
        replaceNode(sourceFile: any, oldNode: any, newNode: any, options: any): void;
        replaceNodeRange(sourceFile: any, startNode: any, endNode: any, newNode: any, options: any): void;
        replaceNodeRangeWithNodes(sourceFile: any, startNode: any, endNode: any, newNodes: any, options: any): void;
        replaceNodeWithNodes(sourceFile: any, oldNode: any, newNodes: any, options: any): void;
        replaceNodeWithText(sourceFile: any, oldNode: any, text: any): void;
        replacePropertyAssignment(sourceFile: any, oldNode: any, newNode: any): void;
        replaceRange(sourceFile: any, range: any, newNode: any, options: any): void;
        replaceRangeWithNodes(sourceFile: any, range: any, newNodes: any, options: any): void;
        replaceRangeWithText(sourceFile: any, range: any, text: any): void;
        tryInsertTypeAnnotation(sourceFile: any, node: any, type: any): void;
    }
    const Position: {
        "0": string;
        "1": string;
        FullStart: number;
        Start: number;
    };
    function applyChanges(text: any, changes: any): any;
    function deleteNode(changes: any, sourceFile: any, node: any, options: any): void;
    function getNewFileText(statements: any, scriptKind: any, newLineCharacter: any, formatContext: any): any;
    function isValidLocationToAddComment(sourceFile: any, position: any): any;
    const useNonAdjustedPositions: {
        useNonAdjustedEndPosition: boolean;
        useNonAdjustedStartPosition: boolean;
    };
}
export function textOrKeywordPart(text: any): any;
export function textPart(text: any): any;
export function textRangeContainsPositionInclusive(span: any, position: any): any;
export function textSpanContainsPosition(span: any, position: any): any;
export function textSpanContainsTextSpan(span: any, other: any): any;
export function textSpanEnd(span: any): any;
export function textSpanIntersection(span1: any, span2: any): any;
export function textSpanIntersectsWith(span: any, start: any, length: any): any;
export function textSpanIntersectsWithPosition(span: any, position: any): any;
export function textSpanIntersectsWithTextSpan(span: any, other: any): any;
export function textSpanIsEmpty(span: any): any;
export function textSpanOverlap(span1: any, span2: any): any;
export function textSpanOverlapsWith(span: any, other: any): any;
export function textSpansEqual(a: any, b: any): any;
export function timestamp(): any;
export function toArray(value: any): any;
export function toEditorSettings(optionsAsMap: any): any;
export function toLowerCase(x: any): any;
export function toPath(fileName: any, basePath: any, getCanonicalFileName: any): any;
export function tokenIsIdentifierOrKeyword(token: any): any;
export function tokenIsIdentifierOrKeywordOrGreaterThan(token: any): any;
export function tokenToString(t: any): any;
export function trace(host: any, ...args: any[]): void;
export function transform(source: any, transformers: any, compilerOptions: any): any;
export function transformDeclarations(context: any): any;
export function transformES2015(context: any): any;
export function transformES2015Module(context: any): any;
export function transformES2016(context: any): any;
export function transformES2017(context: any): any;
export function transformES5(context: any): any;
export function transformESNext(context: any): any;
export function transformGenerators(context: any): any;
export function transformJsx(context: any): any;
export function transformModule(context: any): any;
export function transformNodes(resolver: any, host: any, options: any, nodes: any, transformers: any, allowDtsFiles: any): any;
export function transformSystemModule(context: any): any;
export function transformTypeScript(context: any): any;
export function transpile(input: any, compilerOptions: any, fileName: any, diagnostics: any, moduleName: any): any;
export function transpileModule(input: any, transpileOptions: any): any;
export function tryCast(value: any, test: any): any;
export function tryExtractTSExtension(fileName: any): any;
export function tryGetClassExtendingExpressionWithTypeArguments(node: any): any;
export function tryGetClassImplementingOrExtendingExpressionWithTypeArguments(node: any): any;
export function tryGetExtensionFromPath(path: any): any;
export function tryGetImportFromModuleSpecifier(node: any): any;
export function tryGetModuleNameFromFile(file: any, host: any, options: any): any;
export function tryGetSourceMappingURL(lineInfo: any): any;
export function tryParsePattern(pattern: any): any;
export function tryParseRawSourceMap(text: any): any;
export function tryRemoveDirectoryPrefix(path: any, dirPath: any, getCanonicalFileName: any): any;
export function tryRemoveExtension(path: any, extension: any): any;
export function tryRemovePrefix(str: any, prefix: any, getCanonicalFileName: any): any;
export function tryRemoveSuffix(str: any, suffix: any): any;
export function tryResolveJSModule(moduleName: any, initialDir: any, host: any): any;
export function tryResolveScriptReference(host: any, sourceFile: any, reference: any): any;
export const typeAcquisitionDeclarations: {
    name: string;
    type: string;
}[];
export function typeDirectiveIsEqualTo(oldResolution: any, newResolution: any): any;
export function typeHasCallOrConstructSignatures(type: any, checker: any): any;
export const typeKeywords: number[];
export function typeToDisplayParts(typechecker: any, type: any, enclosingDeclaration: any, flags: any): any;
export const unchangedPollThresholds: {
    "2000": number;
    "250": number;
    "500": number;
};
export const unchangedTextChangeRange: {
    newLength: number;
    span: {
        length: number;
        start: number;
    };
};
export function unescapeLeadingUnderscores(identifier: any): any;
export function unmangleScopedPackageName(typesPackageName: any): any;
export function unorderedRemoveItem(array: any, item: any): any;
export function unorderedRemoveItemAt(array: any, index: any): void;
export function unreachableCodeIsError(options: any): any;
export function unusedLabelIsError(options: any): any;
export function unwrapInnermostStatementOfLabel(node: any, beforeUnwrapLabelCallback: any): any;
export function updateArrayBindingPattern(node: any, elements: any): any;
export function updateArrayLiteral(node: any, elements: any): any;
export function updateArrayTypeNode(node: any, elementType: any): any;
export function updateArrowFunction(node: any, modifiers: any, typeParameters: any, parameters: any, type: any, equalsGreaterThanToken: any, body: any): any;
export function updateAsExpression(node: any, expression: any, type: any): any;
export function updateAwait(node: any, expression: any): any;
export function updateBinary(node: any, left: any, right: any, operator: any): any;
export function updateBindingElement(node: any, dotDotDotToken: any, propertyName: any, name: any, initializer: any): any;
export function updateBlock(node: any, statements: any): any;
export function updateBreak(node: any, label: any): any;
export function updateBundle(node: any, sourceFiles: any, prepends: any): any;
export function updateCall(node: any, expression: any, typeArguments: any, argumentsArray: any, ...args: any[]): any;
export function updateCallSignature(node: any, typeParameters: any, parameters: any, type: any): any;
export function updateCaseBlock(node: any, clauses: any): any;
export function updateCaseClause(node: any, expression: any, statements: any): any;
export function updateCatchClause(node: any, variableDeclaration: any, block: any): any;
export function updateClassDeclaration(node: any, decorators: any, modifiers: any, name: any, typeParameters: any, heritageClauses: any, members: any): any;
export function updateClassExpression(node: any, modifiers: any, name: any, typeParameters: any, heritageClauses: any, members: any): any;
export function updateCommaList(node: any, elements: any): any;
export function updateComputedPropertyName(node: any, expression: any): any;
export function updateConditional(node: any, condition: any, questionToken: any, whenTrue: any, colonToken: any, whenFalse: any): any;
export function updateConditionalTypeNode(node: any, checkType: any, extendsType: any, trueType: any, falseType: any): any;
export function updateConstructSignature(node: any, typeParameters: any, parameters: any, type: any): any;
export function updateConstructor(node: any, decorators: any, modifiers: any, parameters: any, body: any): any;
export function updateConstructorTypeNode(node: any, typeParameters: any, parameters: any, type: any): any;
export function updateContinue(node: any, label: any): any;
export function updateDecorator(node: any, expression: any): any;
export function updateDefaultClause(node: any, statements: any): any;
export function updateDelete(node: any, expression: any): any;
export function updateDo(node: any, statement: any, expression: any): any;
export function updateElementAccess(node: any, expression: any, argumentExpression: any): any;
export function updateEnumDeclaration(node: any, decorators: any, modifiers: any, name: any, members: any): any;
export function updateEnumMember(node: any, name: any, initializer: any): any;
export function updateErrorForNoInputFiles(result: any, configFileName: any, configFileSpecs: any, configParseDiagnostics: any, canJsonReportNoInutFiles: any): any;
export function updateExportAssignment(node: any, decorators: any, modifiers: any, expression: any): any;
export function updateExportDeclaration(node: any, decorators: any, modifiers: any, exportClause: any, moduleSpecifier: any): any;
export function updateExportSpecifier(node: any, propertyName: any, name: any): any;
export function updateExpressionStatement(node: any, expression: any): any;
export function updateExpressionWithTypeArguments(node: any, typeArguments: any, expression: any): any;
export function updateExternalModuleReference(node: any, expression: any): any;
export function updateFor(node: any, initializer: any, condition: any, incrementor: any, statement: any): any;
export function updateForIn(node: any, initializer: any, expression: any, statement: any): any;
export function updateForOf(node: any, awaitModifier: any, initializer: any, expression: any, statement: any): any;
export function updateFunctionDeclaration(node: any, decorators: any, modifiers: any, asteriskToken: any, name: any, typeParameters: any, parameters: any, type: any, body: any): any;
export function updateFunctionExpression(node: any, modifiers: any, asteriskToken: any, name: any, typeParameters: any, parameters: any, type: any, body: any): any;
export function updateFunctionTypeNode(node: any, typeParameters: any, parameters: any, type: any): any;
export function updateGetAccessor(node: any, decorators: any, modifiers: any, name: any, parameters: any, type: any, body: any): any;
export function updateHeritageClause(node: any, types: any): any;
export function updateIdentifier(node: any, typeArguments: any): any;
export function updateIf(node: any, expression: any, thenStatement: any, elseStatement: any): any;
export function updateImportClause(node: any, name: any, namedBindings: any): any;
export function updateImportDeclaration(node: any, decorators: any, modifiers: any, importClause: any, moduleSpecifier: any): any;
export function updateImportEqualsDeclaration(node: any, decorators: any, modifiers: any, name: any, moduleReference: any): any;
export function updateImportSpecifier(node: any, propertyName: any, name: any): any;
export function updateImportTypeNode(node: any, argument: any, qualifier: any, typeArguments: any, isTypeOf: any): any;
export function updateIndexSignature(node: any, decorators: any, modifiers: any, parameters: any, type: any): any;
export function updateIndexedAccessTypeNode(node: any, objectType: any, indexType: any): any;
export function updateInferTypeNode(node: any, typeParameter: any): any;
export function updateInterfaceDeclaration(node: any, decorators: any, modifiers: any, name: any, typeParameters: any, heritageClauses: any, members: any): any;
export function updateIntersectionTypeNode(node: any, types: any): any;
export function updateJsxAttribute(node: any, name: any, initializer: any): any;
export function updateJsxAttributes(node: any, properties: any): any;
export function updateJsxClosingElement(node: any, tagName: any): any;
export function updateJsxElement(node: any, openingElement: any, children: any, closingElement: any): any;
export function updateJsxExpression(node: any, expression: any): any;
export function updateJsxFragment(node: any, openingFragment: any, children: any, closingFragment: any): any;
export function updateJsxOpeningElement(node: any, tagName: any, typeArguments: any, attributes: any): any;
export function updateJsxSelfClosingElement(node: any, tagName: any, typeArguments: any, attributes: any): any;
export function updateJsxSpreadAttribute(node: any, expression: any): any;
export function updateLabel(node: any, label: any, statement: any): any;
export function updateLanguageServiceSourceFile(sourceFile: any, scriptSnapshot: any, version: any, textChangeRange: any, aggressiveChecks: any): any;
export function updateLiteralTypeNode(node: any, literal: any): any;
export function updateMappedTypeNode(node: any, readonlyToken: any, typeParameter: any, questionToken: any, type: any): any;
export function updateMetaProperty(node: any, name: any): any;
export function updateMethod(node: any, decorators: any, modifiers: any, asteriskToken: any, name: any, questionToken: any, typeParameters: any, parameters: any, type: any, body: any): any;
export function updateMethodSignature(node: any, typeParameters: any, parameters: any, type: any, name: any, questionToken: any): any;
export function updateMissingFilePathsWatch(program: any, missingFileWatches: any, createMissingFileWatch: any): void;
export function updateModuleBlock(node: any, statements: any): any;
export function updateModuleDeclaration(node: any, decorators: any, modifiers: any, name: any, body: any): any;
export function updateNamedExports(node: any, elements: any): any;
export function updateNamedImports(node: any, elements: any): any;
export function updateNamespaceExportDeclaration(node: any, name: any): any;
export function updateNamespaceImport(node: any, name: any): any;
export function updateNew(node: any, expression: any, typeArguments: any, argumentsArray: any, ...args: any[]): any;
export function updateNode(updated: any, original: any): any;
export function updateNonNullExpression(node: any, expression: any): any;
export function updateObjectBindingPattern(node: any, elements: any): any;
export function updateObjectLiteral(node: any, properties: any): any;
export function updateOptionalTypeNode(node: any, type: any): any;
export function updateParameter(node: any, decorators: any, modifiers: any, dotDotDotToken: any, name: any, questionToken: any, type: any, initializer: any): any;
export function updateParen(node: any, expression: any): any;
export function updateParenthesizedType(node: any, type: any): any;
export function updatePartiallyEmittedExpression(node: any, expression: any): any;
export function updatePostfix(node: any, operand: any): any;
export function updatePrefix(node: any, operand: any): any;
export function updateProperty(node: any, decorators: any, modifiers: any, name: any, questionOrExclamationToken: any, type: any, initializer: any): any;
export function updatePropertyAccess(node: any, expression: any, name: any): any;
export function updatePropertyAssignment(node: any, name: any, initializer: any): any;
export function updatePropertySignature(node: any, modifiers: any, name: any, questionToken: any, type: any, initializer: any): any;
export function updateQualifiedName(node: any, left: any, right: any): any;
export function updateRestTypeNode(node: any, type: any): any;
export function updateReturn(node: any, expression: any): any;
export function updateSetAccessor(node: any, decorators: any, modifiers: any, name: any, parameters: any, body: any): any;
export function updateShorthandPropertyAssignment(node: any, name: any, objectAssignmentInitializer: any): any;
export function updateSourceFile(sourceFile: any, newText: any, textChangeRange: any, aggressiveChecks: any): any;
export function updateSourceFileNode(node: any, statements: any, isDeclarationFile: any, referencedFiles: any, typeReferences: any, hasNoDefaultLib: any, libReferences: any): any;
export function updateSpread(node: any, expression: any): any;
export function updateSpreadAssignment(node: any, expression: any): any;
export function updateStatement(node: any, expression: any): any;
export function updateSwitch(node: any, expression: any, caseBlock: any): any;
export function updateTaggedTemplate(node: any, tag: any, typeArgumentsOrTemplate: any, template: any): any;
export function updateTemplateExpression(node: any, head: any, templateSpans: any): any;
export function updateTemplateSpan(node: any, expression: any, literal: any): any;
export function updateThrow(node: any, expression: any): any;
export function updateTry(node: any, tryBlock: any, catchClause: any, finallyBlock: any): any;
export function updateTupleTypeNode(node: any, elementTypes: any): any;
export function updateTypeAliasDeclaration(node: any, decorators: any, modifiers: any, name: any, typeParameters: any, type: any): any;
export function updateTypeAssertion(node: any, type: any, expression: any): any;
export function updateTypeLiteralNode(node: any, members: any): any;
export function updateTypeOf(node: any, expression: any): any;
export function updateTypeOperatorNode(node: any, type: any): any;
export function updateTypeParameterDeclaration(node: any, name: any, constraint: any, defaultType: any): any;
export function updateTypePredicateNode(node: any, parameterName: any, type: any): any;
export function updateTypeQueryNode(node: any, exprName: any): any;
export function updateTypeReferenceNode(node: any, typeName: any, typeArguments: any): any;
export function updateUnionTypeNode(node: any, types: any): any;
export function updateVariableDeclaration(node: any, name: any, type: any, initializer: any): any;
export function updateVariableDeclarationList(node: any, declarations: any): any;
export function updateVariableStatement(node: any, modifiers: any, declarationList: any): any;
export function updateVoid(node: any, expression: any): any;
export function updateWatchingWildcardDirectories(existingWatchedForWildcards: any, wildcardDirectories: any, watchDirectory: any): void;
export function updateWhile(node: any, expression: any, statement: any): any;
export function updateWith(node: any, expression: any, statement: any): any;
export function updateYield(node: any, asteriskToken: any, expression: any): any;
export function usingSingleLineStringWriter(action: any): any;
export function validateLocaleAndSetLanguage(locale: any, sys: any, errors: any): void;
export function valueInfoToDeclarationFileText(valueInfo: any, formatSettings: any, outputKind: any): any;
export const version: string;
export const versionMajorMinor: string;
export function visitEachChild(node: any, visitor: any, context: any, nodesVisitor: any, tokenVisitor: any, ...args: any[]): any;
export function visitFunctionBody(node: any, visitor: any, context: any): any;
export function visitLexicalEnvironment(statements: any, visitor: any, context: any, start: any, ensureUseStrict: any): any;
export function visitNode(node: any, visitor: any, test: any, lift: any): any;
export function visitNodes(nodes: any, visitor: any, test: any, start: any, count: any): any;
export function visitParameterList(nodes: any, visitor: any, context: any, nodesVisitor: any): any;
export function walkUpBindingElementsAndPatterns(binding: any): any;
export function walkUpParenthesizedExpressions(node: any): any;
export function walkUpParenthesizedTypes(node: any): any;
export function writeCommentRange(text: any, lineMap: any, writer: any, commentPos: any, commentEnd: any, newLine: any): void;
export function writeFile(host: any, diagnostics: any, fileName: any, data: any, writeByteOrderMark: any, sourceFiles: any): void;
export function zipToIterator(arrayA: any, arrayB: any): any;
export function zipToMap(keys: any, values: any): any;
export function zipWith(arrayA: any, arrayB: any, callback: any): any;
