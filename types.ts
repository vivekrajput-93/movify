import Stripe from "stripe";


export interface UserDetails {
    id:string,
    first_name : string,
    last_name:string,
    full_name?:string,
    avatar_url?:string,
    billing_address?:Stripe,
    payment_method?:Stripe.PaymentMethod[Stripe.PaymentMethod.Type]
};



export interface Product {
    id:string,
    active?:string,
    name?:string,
    description?:string,
    image?:string,
    metadata?: Stripe.Metadata
}


export interface Price {
    id:string,
    product_id:string,
    active?:string,
    description?:string,
    unit_amount?:string,
    currency?:string,
    type?:string,
    interval?:string,
    interval_count?:string,
    trial_period_days?: number | null,
    metadata?: Stripe.Metadata,
    products?: Product
}


export interface Subscription {
    id:string,
    user_id:string,
    status?:string,
    metadata?: string,
    price_id?:string,
    quantity?:string,
    cancel_at_period_end?:boolean,
    created:string,
    current_period_start:string,
    current_period_end:string,
    ended_at?:string,
    cancel_at?:string,
    canceled_at?:string,
    trial_at?:string,
    trial_end?:string,
    prices?:Price
}