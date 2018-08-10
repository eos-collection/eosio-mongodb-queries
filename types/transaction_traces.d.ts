import { Act } from "./action_traces";

// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface TransactionTraces {
    _id:           string;
    id:            string;
    receipt:       TransactionTracesReceipt;
    elapsed:       number;
    net_usage:     number;
    scheduled:     boolean;
    action_traces: ActionTrace[];
    except:        null;
    createdAt:     string;
}

export interface ActionTrace {
    receipt:         ActionTraceReceipt;
    act:             Act;
    elapsed:         number;
    cpu_usage:       number;
    console:         string;
    total_cpu_usage: number;
    trx_id:          string;
    inline_traces:   any[];
}

export interface ActionTraceReceipt {
    receiver:        string;
    act_digest:      string;
    global_sequence: number;
    recv_sequence:   number;
    auth_sequence:   Array<Array<number | string>>;
    code_sequence:   number;
    abi_sequence:    number;
}

export interface TransactionTracesReceipt {
    status:          string;
    cpu_usage_us:    number;
    net_usage_words: number;
}