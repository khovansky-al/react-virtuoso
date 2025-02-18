export declare const topItemCountSystem: import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<[import("@virtuoso.dev/urx").SystemSpec<never[], () => {
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
}>;
