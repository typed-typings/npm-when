import when = require('./index');
import _ = when._;

export function lift<T>(fn: _.NodeFn0<T>): _.LiftedFn0<T>;
export function lift<A1, T>(fn: _.NodeFn1<A1, T>): _.LiftedFn1<A1, T>;
export function lift<A1, A2, T>(fn: _.NodeFn2<A1, A2, T>): _.LiftedFn2<A1, A2, T>;
export function lift<A1, A2, A3, T>(fn: _.NodeFn3<A1, A2, A3, T>): _.LiftedFn3<A1, A2, A3, T>;
export function lift<A1, A2, A3, A4, T>(fn: _.NodeFn4<A1, A2, A3, A4, T>): _.LiftedFn4<A1, A2, A3, A4, T>;
export function lift<A1, A2, A3, A4, A5, T>(fn: _.NodeFn5<A1, A2, A3, A4, A5, T>): _.LiftedFn5<A1, A2, A3, A4, A5, T>;


export function call<T>(
    fn: _.NodeFn0<T>
): when.Promise<T>;

export function call<A1, T>(
    fn: _.NodeFn1<A1, T>,
    arg1: A1 | when.Promise<A1>
): when.Promise<T>;

export function call<A1, A2, T>(
    fn: _.NodeFn2<A1, A2, T>,
    arg1: A1 | when.Promise<A1>,
    arg2: A2 | when.Promise<A2>
): when.Promise<T>;

export function call<A1, A2, A3, T>(
    fn: _.NodeFn3<A1, A2, A3, T>,
    arg1: A1 | when.Promise<A1>,
    arg2: A2 | when.Promise<A2>,
    arg3: A3 | when.Promise<A3>
): when.Promise<T>;

export function call<A1, A2, A3, A4, T>(
    fn: _.NodeFn4<A1, A2, A3, A4, T>,
    arg1: A1 | when.Promise<A1>,
    arg2: A2 | when.Promise<A2>,
    arg3: A3 | when.Promise<A3>,
    arg4: A4 | when.Promise<A4>
): when.Promise<T>;

export function call<A1, A2, A3, A4, A5, T>(
    fn: _.NodeFn5<A1, A2, A3, A4, A5, T>,
    arg1: A1 | when.Promise<A1>,
    arg2: A2 | when.Promise<A2>,
    arg3: A3 | when.Promise<A3>,
    arg4: A4 | when.Promise<A4>,
    arg5: A5 | when.Promise<A5>
): when.Promise<T>;


export function apply<T>(fn: _.NodeFn0<T>, args: any[] | IArguments): when.Promise<T>;
export function apply<T>(fn: _.NodeFn1<any, T>, args: any[] | IArguments): when.Promise<T>;
export function apply<T>(fn: _.NodeFn2<any, any, T>, args: any[] | IArguments): when.Promise<T>;
export function apply<T>(fn: _.NodeFn3<any, any, any, T>, args: any[] | IArguments): when.Promise<T>;
export function apply<T>(fn: _.NodeFn4<any, any, any, any, T>, args: any[] | IArguments): when.Promise<T>;
export function apply<T>(fn: _.NodeFn5<any, any, any, any, any, T>, args: any[] | IArguments): when.Promise<T>;


export function liftAll(srcApi: any, transform?: (destApi: any, liftedFunc: Function, name: string) => any, destApi?: any): any;


export function liftCallback<TArg>(callback: (err: any, arg: TArg) => void): (value: when.Promise<TArg>) => when.Promise<TArg>;


export function bindCallback<TArg>(arg: when.Promise<TArg>, callback: (err: any, arg: TArg) => void): when.Promise<TArg>;


export interface Resolver<T> {
    reject(reason: any): void;
    resolve(value?: T): void;
    resolve(value?: when.Promise<T>): void;
}

export function createCallback<TArg>(resolver: Resolver<TArg>): (err: any, arg: TArg) => void;
