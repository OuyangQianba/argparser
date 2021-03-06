import { Option, OptionItem, SubcmdOption } from "./types";
export interface Helper {
    usage?: string;
    example?: string | [string];
    formatOptionName?: (op?: OptionItem) => string;
    showOp?: (op: Option, width: number) => void;
}
export declare function subcmdParser(op: SubcmdOption, helper?: Helper): {
    cmd: string;
    result: any;
};
export declare function cmdParser(op: Option, helper?: Helper): any;
