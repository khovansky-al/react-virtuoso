import * as u from '@virtuoso.dev/urx';
import { LogLevel } from './loggerSystem';
/**
 * Fixes upward scrolling by calculating and compensation from changed item heights, using scrollBy.
 */
export declare const upwardScrollFixSystem: u.SystemSpec<[u.SystemSpec<never[], () => {
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
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
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
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
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
}]) => {
    isScrolling: u.Stream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}>, u.SystemSpec<never[], () => {
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
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
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
}]) => {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
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
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    fixedHeaderHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}>, u.SystemSpec<never[], () => {
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}>, u.SystemSpec<never[], () => {
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
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}>, u.SystemSpec<never[], () => {
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
}>], ([{ sizes, totalCount, listRefresh }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
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
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
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
}]) => {
    isScrolling: u.Stream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ sizes, totalCount, data, firstItemIndex }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
}, {
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    fixedHeaderHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<import("./scrollToIndexSystem").IndexLocation>;
}, {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    isScrolling: u.Stream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    isScrolling: u.Stream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ scrollBy, scrollTop, deviation, scrollingInProgress }, { isScrolling, isAtBottom, atBottomState, scrollDirection, lastJumpDueToItemResize }, { listState }, { beforeUnshiftWith, shiftWithOffset, sizes }, { log },]: [{
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
    isScrolling: u.Stream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
}, {
    isScrolling: u.Stream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}, {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./sizeSystem").SizeFunction>;
}, {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    deviation: u.StatefulStream<number>;
}>;