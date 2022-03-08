import * as u from '@virtuoso.dev/urx';
import { UP, DOWN, ScrollDirection } from './stateFlagsSystem';
import { LogLevel } from './loggerSystem';
export declare type NumberTuple = [number, number];
export declare type Overscan = number | {
    main: number;
    reverse: number;
};
export declare const TOP: "top";
export declare const BOTTOM: "bottom";
export declare const NONE: "none";
export declare type ListEnd = typeof TOP | typeof BOTTOM;
export declare type ViewportIncrease = number | {
    [k in ListEnd]?: number;
};
export declare type ChangeDirection = typeof UP | typeof DOWN | typeof NONE;
export declare function getOverscan(overscan: Overscan, end: ListEnd, direction: ScrollDirection): number;
export declare const sizeRangeSystem: u.SystemSpec<[u.SystemSpec<never[], () => {
    scrollContainerState: u.Stream<[number, number]>;
    scrollTop: u.Stream<number>;
    viewportHeight: u.Stream<number>;
    headerHeight: u.StatefulStream<number>;
    footerHeight: u.StatefulStream<number>;
    scrollHeight: u.Stream<number>;
    smoothScrollTargetReached: u.Stream<true>;
    scrollTo: u.Stream<ScrollToOptions>;
    scrollBy: u.Stream<ScrollToOptions>;
    statefulScrollTop: u.StatefulStream<number>;
    deviation: u.StatefulStream<number>;
    scrollingInProgress: u.StatefulStream<boolean>;
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: u.Stream<[number, number]>;
    scrollTop: u.Stream<number>;
    viewportHeight: u.Stream<number>;
    headerHeight: u.StatefulStream<number>;
    footerHeight: u.StatefulStream<number>;
    scrollHeight: u.Stream<number>;
    smoothScrollTargetReached: u.Stream<true>;
    scrollTo: u.Stream<ScrollToOptions>;
    scrollBy: u.Stream<ScrollToOptions>;
    statefulScrollTop: u.StatefulStream<number>;
    deviation: u.StatefulStream<number>;
    scrollingInProgress: u.StatefulStream<boolean>;
}, {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    listBoundary: u.Stream<NumberTuple>;
    overscan: u.StatefulStream<Overscan>;
    topListHeight: u.StatefulStream<number>;
    fixedHeaderHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<ViewportIncrease>;
    visibleRange: u.StatefulStream<NumberTuple>;
}>;
