import { RefHandle } from '@virtuoso.dev/react-urx';
import * as React from 'react';
import { ComputeItemKey, ItemContent, FixedHeaderContent, TableComponents, TableRootProps } from './interfaces';
export declare const Items: React.NamedExoticComponent<object>;
export interface Hooks {
    usePublisher: typeof usePublisher;
    useEmitterValue: typeof useEmitterValue;
    useEmitter: typeof useEmitter;
}
export declare type TableHandle = RefHandle<typeof Table>;
export declare const Table: React.ForwardRefExoticComponent<{} & {
    context?: unknown;
    itemContent?: ItemContent<any, unknown> | undefined;
    components?: TableComponents<unknown> | undefined;
    computeItemKey?: ComputeItemKey<any, unknown> | undefined;
    scrollerRef?: ((ref: HTMLElement | Window | null) => void) | undefined;
    data?: import("./sizeSystem").Data;
    logLevel?: import("./loggerSystem").LogLevel | undefined;
    overscan?: import("./sizeRangeSystem").Overscan | undefined;
    increaseViewportBy?: import("./sizeRangeSystem").ViewportIncrease | undefined;
    atBottomThreshold?: number | undefined;
    scrollSeekConfiguration?: false | import("./interfaces").ScrollSeekConfiguration | undefined;
    useWindowScroll?: boolean | undefined;
    customScrollParent?: HTMLElement | undefined;
    totalCount?: number | undefined;
    initialItemCount?: number | undefined;
    firstItemIndex?: number | undefined;
    itemSize?: import("./sizeSystem").SizeFunction | undefined;
    initialTopMostItemIndex?: import("./scrollToIndexSystem").IndexLocation | undefined;
    followOutput?: import("./interfaces").FollowOutput | undefined;
    groupCounts?: number[] | undefined;
    topItemCount?: number | undefined;
    initialScrollTop?: number | undefined;
    alignToBottom?: boolean | undefined;
    fixedItemHeight?: number | undefined;
    defaultItemHeight?: number | undefined;
    fixedHeaderContent?: FixedHeaderContent | undefined;
} & {
    isScrolling?: ((value: boolean) => void) | undefined;
    atTopStateChange?: ((value: boolean) => void) | undefined;
    atBottomStateChange?: ((value: boolean) => void) | undefined;
    startReached?: ((value: number) => void) | undefined;
    endReached?: ((value: number) => void) | undefined;
    rangeChanged?: ((value: import("./interfaces").ListRange) => void) | undefined;
    groupIndices?: ((value: number[]) => void) | undefined;
    itemsRendered?: ((value: import("./listStateSystem").ListItems) => void) | undefined;
    totalListHeightChanged?: ((value: number) => void) | undefined;
} & TableRootProps & React.RefAttributes<import("@virtuoso.dev/react-urx").MethodsFromPropMap<import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, listRefresh }, { isAtBottom, atBottomState }, { scrollToIndex }, { scrolledToInitialItem }, { propsReady, didMount }, { log }, { scrollingInProgress },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}, {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}, {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ scrollBy, scrollTop, deviation, scrollingInProgress }, { isScrolling, isAtBottom, atBottomState, scrollDirection, lastJumpDueToItemResize }, { listState }, { beforeUnshiftWith, shiftWithOffset, sizes }, { log },]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}, {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}, {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}>], ([{ topItemsIndexes }]: [{
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}]) => {
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}, {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>], ([{ sizes, firstItemIndex, data }, { listState }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}]) => {
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>], ([{ scrollVelocity }]: [{
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}]) => {
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}, {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}>], ([{ footerHeight, headerHeight }, { listState }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}]) => {
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}, {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}>], ([{ footerHeight, headerHeight }, { listState }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}]) => {
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalListHeight }, { didMount }, { scrollTo }]: [{
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}, {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}>], ([{ footerHeight, headerHeight }, { listState }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}]) => {
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
}>], ([{ viewportHeight }, { totalListHeight }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
}]) => {
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollTo, scrollContainerState }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight }, { log }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}]) => {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}>, import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}, {
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount }, { scrollTop, viewportHeight, headerHeight, scrollingInProgress }, { scrollToIndex }]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollIntoView: import("@virtuoso.dev/urx").Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
}>], ([sizeRange, initialItemCount, propsReady, scrollSeek, totalListHeight, initialScrollTopSystem, alignToBottom, windowScroller, scrollIntoView,]: [{
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
}, {
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
}, {
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
}, {
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
}, {
    scrollIntoView: import("@virtuoso.dev/urx").Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
}]) => {
    scrollIntoView: import("@virtuoso.dev/urx").Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, import("@virtuoso.dev/urx").SystemSpec<never[], () => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ totalCount, sizeRanges, fixedItemSize, defaultItemSize, trackItemSizes, itemSize, data, firstItemIndex, groupIndices, statefulTotalCount, }, { initialTopMostItemIndex, scrolledToInitialItem }, domIO, followOutput, { listState, topItemsIndexes, ...flags }, { scrollToIndex }, _, { topItemCount }, { groupCounts }, featureGroup1, log,]: [{
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    defaultItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    fixedItemSize: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    unshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWith: import("@virtuoso.dev/urx").Stream<number>;
    shiftWithOffset: import("@virtuoso.dev/urx").Stream<number>;
    beforeUnshiftWith: import("@virtuoso.dev/urx").Stream<number>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizes: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: import("@virtuoso.dev/urx").Stream<boolean>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
}, {
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
}, {
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
}, {
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
}, {
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    topItemsIndexes: import("@virtuoso.dev/urx").Stream<[number]>;
}, {
    scrollIntoView: import("@virtuoso.dev/urx").Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: import("@virtuoso.dev/urx").Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}>, import("@virtuoso.dev/urx").SystemSpec<import("@virtuoso.dev/urx").SystemSpecs, () => {
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, unknown>>;
    fixedHeaderContent: import("@virtuoso.dev/urx").StatefulStream<FixedHeaderContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<TableComponents<unknown>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, unknown>>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    TableComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").TableProps & {
        context?: unknown;
    }> | null | undefined>;
    TableHeadComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TableBodyComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    TableRowComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
}>], ([listSystem, propsSystem]: [{
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: import("@virtuoso.dev/urx").Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}, {
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, unknown>>;
    fixedHeaderContent: import("@virtuoso.dev/urx").StatefulStream<FixedHeaderContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<TableComponents<unknown>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, unknown>>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    TableComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").TableProps & {
        context?: unknown;
    }> | null | undefined>;
    TableHeadComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TableBodyComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    TableRowComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
}]) => {
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, unknown>>;
    fixedHeaderContent: import("@virtuoso.dev/urx").StatefulStream<FixedHeaderContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<TableComponents<unknown>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, unknown>>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    TableComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").TableProps & {
        context?: unknown;
    }> | null | undefined>;
    TableHeadComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TableBodyComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    TableRowComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: import("@virtuoso.dev/urx").Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}>, {
    required: {};
    optional: {
        context: "context";
        followOutput: "followOutput";
        firstItemIndex: "firstItemIndex";
        itemContent: "itemContent";
        fixedHeaderContent: "fixedHeaderContent";
        overscan: "overscan";
        increaseViewportBy: "increaseViewportBy";
        totalCount: "totalCount";
        topItemCount: "topItemCount";
        initialTopMostItemIndex: "initialTopMostItemIndex";
        components: "components";
        groupCounts: "groupCounts";
        atBottomThreshold: "atBottomThreshold";
        computeItemKey: "computeItemKey";
        defaultItemHeight: "defaultItemHeight";
        fixedItemHeight: "fixedItemHeight";
        itemSize: "itemSize";
        scrollSeekConfiguration: "scrollSeekConfiguration";
        data: "data";
        initialItemCount: "initialItemCount";
        initialScrollTop: "initialScrollTop";
        alignToBottom: "alignToBottom";
        useWindowScroll: "useWindowScroll";
        customScrollParent: "customScrollParent";
        scrollerRef: "scrollerRef";
        logLevel: "logLevel";
    };
    methods: {
        scrollToIndex: "scrollToIndex";
        scrollIntoView: "scrollIntoView";
        scrollTo: "scrollTo";
        scrollBy: "scrollBy";
    };
    events: {
        isScrolling: "isScrolling";
        endReached: "endReached";
        startReached: "startReached";
        rangeChanged: "rangeChanged";
        atBottomStateChange: "atBottomStateChange";
        atTopStateChange: "atTopStateChange";
        totalListHeightChanged: "totalListHeightChanged";
        itemsRendered: "itemsRendered";
        groupIndices: "groupIndices";
    };
}>>>, usePublisher: <K_3 extends "context" | "itemContent" | "components" | "computeItemKey" | "scrollerRef" | "ScrollSeekPlaceholder" | "data" | "ScrollerComponent" | "scrollContainerState" | "scrollTop" | "viewportHeight" | "headerHeight" | "footerHeight" | "scrollHeight" | "smoothScrollTargetReached" | "scrollTo" | "scrollBy" | "statefulScrollTop" | "deviation" | "scrollingInProgress" | "log" | "logLevel" | "listBoundary" | "overscan" | "topListHeight" | "fixedHeaderHeight" | "increaseViewportBy" | "visibleRange" | "isScrolling" | "isAtTop" | "isAtBottom" | "atBottomThreshold" | "atBottomState" | "atTopStateChange" | "atBottomStateChange" | "scrollDirection" | "scrollVelocity" | "lastJumpDueToItemResize" | "isSeeking" | "scrollSeekConfiguration" | "scrollSeekRangeChanged" | "propsReady" | "didMount" | "useWindowScroll" | "customScrollParent" | "windowScrollContainerState" | "windowViewportRect" | "windowScrollTo" | "totalCount" | "scrollToIndex" | "initialItemCount" | "totalListHeight" | "startReached" | "endReached" | "rangeChanged" | "sizeRanges" | "groupIndices" | "firstItemIndex" | "statefulTotalCount" | "trackItemSizes" | "itemSize" | "scrolledToInitialItem" | "initialTopMostItemIndex" | "followOutput" | "groupCounts" | "topItemsIndexes" | "listState" | "itemsRendered" | "topItemCount" | "totalListHeightChanged" | "initialScrollTop" | "alignToBottom" | "paddingTopAddition" | "scrollIntoView" | "fixedItemHeight" | "defaultItemHeight" | "EmptyPlaceholder" | "fixedHeaderContent" | "TableComponent" | "TableHeadComponent" | "TableBodyComponent" | "TableRowComponent">(key: K_3) => (value: {
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, unknown>>;
    fixedHeaderContent: import("@virtuoso.dev/urx").StatefulStream<FixedHeaderContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<TableComponents<unknown>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, unknown>>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    TableComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").TableProps & {
        context?: unknown;
    }> | null | undefined>;
    TableHeadComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TableBodyComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    TableRowComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: import("@virtuoso.dev/urx").Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}[K_3] extends import("@virtuoso.dev/urx").Stream<infer R_4> ? R_4 : never) => void, useEmitterValue: <K_4 extends "context" | "itemContent" | "components" | "computeItemKey" | "scrollerRef" | "ScrollSeekPlaceholder" | "data" | "ScrollerComponent" | "scrollContainerState" | "scrollTop" | "viewportHeight" | "headerHeight" | "footerHeight" | "scrollHeight" | "smoothScrollTargetReached" | "scrollTo" | "scrollBy" | "statefulScrollTop" | "deviation" | "scrollingInProgress" | "log" | "logLevel" | "listBoundary" | "overscan" | "topListHeight" | "fixedHeaderHeight" | "increaseViewportBy" | "visibleRange" | "isScrolling" | "isAtTop" | "isAtBottom" | "atBottomThreshold" | "atBottomState" | "atTopStateChange" | "atBottomStateChange" | "scrollDirection" | "scrollVelocity" | "lastJumpDueToItemResize" | "isSeeking" | "scrollSeekConfiguration" | "scrollSeekRangeChanged" | "propsReady" | "didMount" | "useWindowScroll" | "customScrollParent" | "windowScrollContainerState" | "windowViewportRect" | "windowScrollTo" | "totalCount" | "scrollToIndex" | "initialItemCount" | "totalListHeight" | "startReached" | "endReached" | "rangeChanged" | "sizeRanges" | "groupIndices" | "firstItemIndex" | "statefulTotalCount" | "trackItemSizes" | "itemSize" | "scrolledToInitialItem" | "initialTopMostItemIndex" | "followOutput" | "groupCounts" | "topItemsIndexes" | "listState" | "itemsRendered" | "topItemCount" | "totalListHeightChanged" | "initialScrollTop" | "alignToBottom" | "paddingTopAddition" | "scrollIntoView" | "fixedItemHeight" | "defaultItemHeight" | "EmptyPlaceholder" | "fixedHeaderContent" | "TableComponent" | "TableHeadComponent" | "TableBodyComponent" | "TableRowComponent", V = {
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, unknown>>;
    fixedHeaderContent: import("@virtuoso.dev/urx").StatefulStream<FixedHeaderContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<TableComponents<unknown>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, unknown>>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    TableComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").TableProps & {
        context?: unknown;
    }> | null | undefined>;
    TableHeadComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TableBodyComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    TableRowComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: import("@virtuoso.dev/urx").Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}[K_4] extends import("@virtuoso.dev/urx").StatefulStream<infer R_5> ? R_5 : never>(key: K_4) => V, useEmitter: <K_5 extends "context" | "itemContent" | "components" | "computeItemKey" | "scrollerRef" | "ScrollSeekPlaceholder" | "data" | "ScrollerComponent" | "scrollContainerState" | "scrollTop" | "viewportHeight" | "headerHeight" | "footerHeight" | "scrollHeight" | "smoothScrollTargetReached" | "scrollTo" | "scrollBy" | "statefulScrollTop" | "deviation" | "scrollingInProgress" | "log" | "logLevel" | "listBoundary" | "overscan" | "topListHeight" | "fixedHeaderHeight" | "increaseViewportBy" | "visibleRange" | "isScrolling" | "isAtTop" | "isAtBottom" | "atBottomThreshold" | "atBottomState" | "atTopStateChange" | "atBottomStateChange" | "scrollDirection" | "scrollVelocity" | "lastJumpDueToItemResize" | "isSeeking" | "scrollSeekConfiguration" | "scrollSeekRangeChanged" | "propsReady" | "didMount" | "useWindowScroll" | "customScrollParent" | "windowScrollContainerState" | "windowViewportRect" | "windowScrollTo" | "totalCount" | "scrollToIndex" | "initialItemCount" | "totalListHeight" | "startReached" | "endReached" | "rangeChanged" | "sizeRanges" | "groupIndices" | "firstItemIndex" | "statefulTotalCount" | "trackItemSizes" | "itemSize" | "scrolledToInitialItem" | "initialTopMostItemIndex" | "followOutput" | "groupCounts" | "topItemsIndexes" | "listState" | "itemsRendered" | "topItemCount" | "totalListHeightChanged" | "initialScrollTop" | "alignToBottom" | "paddingTopAddition" | "scrollIntoView" | "fixedItemHeight" | "defaultItemHeight" | "EmptyPlaceholder" | "fixedHeaderContent" | "TableComponent" | "TableHeadComponent" | "TableBodyComponent" | "TableRowComponent", V_1 = {
    context: import("@virtuoso.dev/urx").StatefulStream<unknown>;
    itemContent: import("@virtuoso.dev/urx").StatefulStream<ItemContent<any, unknown>>;
    fixedHeaderContent: import("@virtuoso.dev/urx").StatefulStream<FixedHeaderContent>;
    components: import("@virtuoso.dev/urx").StatefulStream<TableComponents<unknown>>;
    computeItemKey: import("@virtuoso.dev/urx").StatefulStream<ComputeItemKey<any, unknown>>;
    scrollerRef: import("@virtuoso.dev/urx").StatefulStream<(ref: HTMLElement | Window | null) => void>;
    TableComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").TableProps & {
        context?: unknown;
    }> | null | undefined>;
    TableHeadComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TableBodyComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "children"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    TableRowComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ItemProps & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: import("@virtuoso.dev/urx").StatefulStream<"div" | "table" | "tbody" | "thead" | "tr" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
    log: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").Log>;
    logLevel: import("@virtuoso.dev/urx").StatefulStream<import("./loggerSystem").LogLevel>;
    scrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    scrollTop: import("@virtuoso.dev/urx").Stream<number>;
    viewportHeight: import("@virtuoso.dev/urx").Stream<number>;
    headerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    footerHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollHeight: import("@virtuoso.dev/urx").Stream<number>;
    smoothScrollTargetReached: import("@virtuoso.dev/urx").Stream<true>;
    scrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    scrollBy: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    statefulScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    deviation: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollingInProgress: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollIntoView: import("@virtuoso.dev/urx").Stream<import("./scrollIntoViewSystem").ScrollIntoViewLocation>;
    useWindowScroll: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    customScrollParent: import("@virtuoso.dev/urx").StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: import("@virtuoso.dev/urx").Stream<[number, number]>;
    windowViewportRect: import("@virtuoso.dev/urx").Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: import("@virtuoso.dev/urx").Stream<ScrollToOptions>;
    alignToBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    paddingTopAddition: import("@virtuoso.dev/urx").StatefulStream<number>;
    initialScrollTop: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    totalListHeightChanged: import("@virtuoso.dev/urx").Stream<number>;
    isSeeking: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    scrollSeekConfiguration: import("@virtuoso.dev/urx").StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: import("@virtuoso.dev/urx").StatefulStream<number>;
    scrollSeekRangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    propsReady: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    didMount: import("@virtuoso.dev/urx").Stream<boolean>;
    initialItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listBoundary: import("@virtuoso.dev/urx").Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    fixedHeaderHeight: import("@virtuoso.dev/urx").StatefulStream<number>;
    increaseViewportBy: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: import("@virtuoso.dev/urx").StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: import("@virtuoso.dev/urx").Stream<boolean>;
    isAtTop: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    isAtBottom: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    atBottomState: import("@virtuoso.dev/urx").Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    atBottomStateChange: import("@virtuoso.dev/urx").Stream<boolean>;
    scrollDirection: import("@virtuoso.dev/urx").StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: import("@virtuoso.dev/urx").StatefulStream<number>;
    lastJumpDueToItemResize: import("@virtuoso.dev/urx").StatefulStream<number>;
    endReached: import("@virtuoso.dev/urx").Stream<number>;
    startReached: import("@virtuoso.dev/urx").Stream<number>;
    rangeChanged: import("@virtuoso.dev/urx").Stream<import("./interfaces").ListRange>;
    itemsRendered: import("@virtuoso.dev/urx").Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    listState: import("@virtuoso.dev/urx").StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: import("@virtuoso.dev/urx").Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    itemSize: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").SizeFunction>;
    groupIndices: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    followOutput: import("@virtuoso.dev/urx").StatefulStream<import("./interfaces").FollowOutput>;
    totalCount: import("@virtuoso.dev/urx").Stream<number>;
    data: import("@virtuoso.dev/urx").StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: import("@virtuoso.dev/urx").StatefulStream<number>;
    sizeRanges: import("@virtuoso.dev/urx").Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: import("@virtuoso.dev/urx").StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
    scrolledToInitialItem: import("@virtuoso.dev/urx").StatefulStream<boolean>;
    topItemsIndexes: import("@virtuoso.dev/urx").StatefulStream<number[]>;
    topItemCount: import("@virtuoso.dev/urx").StatefulStream<number>;
    groupCounts: import("@virtuoso.dev/urx").Stream<number[]>;
    fixedItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
    defaultItemHeight: import("@virtuoso.dev/urx").StatefulStream<number | undefined>;
}[K_5] extends import("@virtuoso.dev/urx").Stream<infer R_6> ? R_6 : never>(key: K_5, callback: (value: V_1) => void) => void;
