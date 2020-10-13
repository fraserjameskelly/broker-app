export interface PolicyType {
    id: number|null;
    name: string;
}

export interface Insurer {
    id: number|null;
    name: string;
}

export interface Policy {
    id: number|null;
    customerName: string;
    customerAddress: string;
    premium: string;
    policyType: number | PolicyType;
    insurer: number | Insurer;
}
