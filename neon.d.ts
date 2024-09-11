declare class Collection<T> {
    readonly length: number

    toArray(): T[]
}

declare module Neon {
    type Event = Events.ScriptEvent | Events.ShowCommandPalette | Events.Error | Events.Prompt<any>;

    module Events {
        interface ScriptEvent {
            type: "script_event";
            data: any;
        }
        interface ShowCommandPalette {
            type: "neon.showCommandPalette";
        }
        interface Error {
            type: "neon.error";
            data: any;
        }
        interface PromptPayload<T> {
            prompt: Neon.UI.Prompt<T>;
            eventId: string;
            allowFiltering: boolean;
        }
        interface Prompt<T> {
            type: "neon.prompt";
            data: PromptPayload<T>;
        }

        function listen(eventName: string, callback: (result: string) => void): void;
        function trigger(eventName: string, args: any): boolean;
        function remove(eventName: string): void;
    }

    function sendRawEvent<T>(type: string, data: T): void;
    function sendEvent(event: Neon.Event): void;

    module UI {
        interface Prompt<PromptValueType> {
            categories: Category<PromptValueType>[];
        }

        interface Category<T> {
            title: string;
            actions: Action<T>[];
        }

        interface Action<T> {
            title: string;
            description?: string;
            value?: T;
        }
    }

    type ModuleExecutionResult = "ok" | "error" | void;

    interface ScriptMetadata {
        displayName: string;
        showInCommandPalette?: boolean;
        author?: string;
        category?: string;
        description?: string;
        keywords?: string[];
    }

    interface ScriptBase<T = any> {
        metadata: ScriptMetadata;
        execute: (this: Script<T> & Record<string, (...args: any[]) => any>, commandId: string, args: T) => ModuleExecutionResult;
    }

    type Script<T = any, M = {}> = ScriptBase<T> & M;

    interface CommandPalette {
        prompt<T>(prompt: UI.Prompt<T>, callback: (result: { selection: T; value: string }) => void, allowFiltering?: boolean): void;
    }

    var ui: Neon.CommandPalette;
    var events: typeof Neon.Events;
}

declare var neon: typeof Neon;

declare var __neonEvents: {
    [eventName: string]: (result: string) => void;
};

declare var constants: {
    TIMEDISPLAY_24Timecode: number;
    TIMEDISPLAY_25Timecode: number;
    TIMEDISPLAY_2997DropTimecode: number;
    TIMEDISPLAY_2997NonDropTimecode: number;
    TIMEDISPLAY_30Timecode: number;
    TIMEDISPLAY_50Timecode: number;
    TIMEDISPLAY_5994DropTimecode: number;
    TIMEDISPLAY_5994NonDropTimecode: number;
    TIMEDISPLAY_60Timecode: number;
    TIMEDISPLAY_Frames: number;
    TIMEDISPLAY_23976Timecode: number;
    TIMEDISPLAY_16mmFeetFrames: number;
    TIMEDISPLAY_35mmFeetFrames: number;
    TIMEDISPLAY_48Timecode: number;
    TIMEDISPLAY_AudioSamplesTimecode: number;
    TIMEDISPLAY_AudioMsTimecode: number;
    KF_Interp_Mode_Linear: number;
    KF_Interp_Mode_Hold: number;
    KF_Interp_Mode_Bezier: number;
    KF_Interp_Mode_Time: number;
    FIELDTYPE_Progressive: number;
    FIELDTYPE_UpperFirst: number;
    FIELDTYPE_LowerFirst: number;
    AUDIOCHANNELTYPE_Mono: number;
    AUDIOCHANNELTYPE_Stereo: number;
    AUDIOCHANNELTYPE_51: number;
    AUDIOCHANNELTYPE_Multichannel: number;
    AUDIOCHANNELTYPE_4Channel: number;
    AUDIOCHANNELTYPE_8Channel: number;
    VRPROJECTIONTYPE_None: number;
    VRPROJECTIONTYPE_Equirectangular: number;
    VRSTEREOSCOPICTYPE_Monoscopic: number;
    VRSTEREOSCOPICTYPE_OverUnder: number;
    VRSTEREOSCOPICTYPE_SideBySide: number;
    MediaType_VIDEO: string;
    MediaType_AUDIO: string;
    MediaType_ANY: string;
    MediaType_Audio: number;
    MediaType_Video: number;
    Colorspace_601: number;
    Colorspace_709: number;
    Colorspace_2020: number;
    Colorspace_2100HLG: number;
    BitPrecision_8bit: number;
    BitPrecision_10bit: number;
    BitPrecision_Float: number;
    BitPrecision_HDR: number;
    NOT_SET: string;
};

declare var utils: {
    filterArray<T>(arr: T[], callback: (element: T, index: number, array: T[]) => boolean): T[];
    isObjectEmpty(objectName: any): boolean;
    generateTBID(): string;
    waitForResponse(connection: any): any;
    updateAllProjectItems(): void;
};
