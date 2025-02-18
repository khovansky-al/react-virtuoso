import { RefHandle } from '@virtuoso.dev/react-urx';
import * as u from '@virtuoso.dev/urx';
import * as React from 'react';
import { GridComponents, GridComputeItemKey, GridItemContent, GridRootProps } from './interfaces';
declare const Grid: React.ForwardRefExoticComponent<{} & {
    itemContent?: GridItemContent<any> | undefined;
    components?: GridComponents<any> | undefined;
    computeItemKey?: GridComputeItemKey | undefined;
    itemClassName?: string | undefined;
    listClassName?: string | undefined;
    scrollerRef?: ((ref: HTMLElement | null) => void) | undefined;
    overscan?: import("./sizeRangeSystem").Overscan | undefined;
    scrollSeekConfiguration?: false | import("./interfaces").ScrollSeekConfiguration | undefined;
    useWindowScroll?: boolean | undefined;
    customScrollParent?: HTMLElement | undefined;
    totalCount?: number | undefined;
    initialItemCount?: number | undefined;
    scrollSeek?: any;
    item?: GridItemContent<any> | undefined;
    ItemContainer?: any;
    ScrollContainer?: any;
    ListContainer?: any;
} & {
    isScrolling?: ((value: boolean) => void) | undefined;
    atTopStateChange?: ((value: boolean) => void) | undefined;
    atBottomStateChange?: ((value: boolean) => void) | undefined;
    startReached?: ((value: number) => void) | undefined;
    endReached?: ((value: number) => void) | undefined;
    rangeChanged?: ((value: import("./interfaces").ListRange) => void) | undefined;
} & GridRootProps & React.RefAttributes<import("@virtuoso.dev/react-urx").MethodsFromPropMap<u.SystemSpec<[u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
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
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
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
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    fixedHeaderHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
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
}>], ([{ scrollVelocity }]: [{
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
}]) => {
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
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
}>], ([{ scrollTo, scrollContainerState }]: [{
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
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<[number, number]>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
}>], ([{ overscan, visibleRange, listBoundary }, { scrollTop, viewportHeight, scrollBy, scrollTo, smoothScrollTargetReached, scrollContainerState }, stateFlags, scrollSeek, { propsReady, didMount }, { windowViewportRect, windowScrollTo, useWindowScroll, customScrollParent, windowScrollContainerState },]: [{
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    fixedHeaderHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
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
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<[number, number]>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
}]) => {
    startReached: u.Stream<number>;
    endReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
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
    gridState: u.StatefulStream<import("./gridSystem").GridState>;
    totalListHeight: u.StatefulStream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    totalCount: u.StatefulStream<number>;
    viewportDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    itemDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    scrollTop: u.Stream<number>;
    scrollHeight: u.Stream<number>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    scrollBy: u.Stream<ScrollToOptions>;
    scrollTo: u.Stream<ScrollToOptions>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    smoothScrollTargetReached: u.Stream<true>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<[number, number]>;
    deviation: u.StatefulStream<number>;
    scrollContainerState: u.Stream<[number, number]>;
    initialItemCount: u.StatefulStream<number>;
}>, u.SystemSpec<u.SystemSpecs, () => {
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<GridItemContent<any>>;
    components: u.StatefulStream<GridComponents<any>>;
    computeItemKey: u.StatefulStream<GridComputeItemKey>;
    itemClassName: u.StatefulStream<string>;
    listClassName: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | null) => void>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridListProps & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridItem & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
}>], ([gridSystem, gridComponentPropsSystem]: [{
    startReached: u.Stream<number>;
    endReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
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
    gridState: u.StatefulStream<import("./gridSystem").GridState>;
    totalListHeight: u.StatefulStream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    totalCount: u.StatefulStream<number>;
    viewportDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    itemDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    scrollTop: u.Stream<number>;
    scrollHeight: u.Stream<number>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    scrollBy: u.Stream<ScrollToOptions>;
    scrollTo: u.Stream<ScrollToOptions>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    smoothScrollTargetReached: u.Stream<true>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<[number, number]>;
    deviation: u.StatefulStream<number>;
    scrollContainerState: u.Stream<[number, number]>;
    initialItemCount: u.StatefulStream<number>;
}, {
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<GridItemContent<any>>;
    components: u.StatefulStream<GridComponents<any>>;
    computeItemKey: u.StatefulStream<GridComputeItemKey>;
    itemClassName: u.StatefulStream<string>;
    listClassName: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | null) => void>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridListProps & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridItem & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
}]) => {
    item: u.Stream<GridItemContent<any>>;
    ItemContainer: u.Stream<any>;
    ScrollContainer: u.Stream<any>;
    ListContainer: u.Stream<any>;
    emptyComponent: u.Stream<any>;
    scrollSeek: u.Stream<any>;
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<GridItemContent<any>>;
    components: u.StatefulStream<GridComponents<any>>;
    computeItemKey: u.StatefulStream<GridComputeItemKey>;
    itemClassName: u.StatefulStream<string>;
    listClassName: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | null) => void>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridListProps & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridItem & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "ref" | "style" | "tabIndex" | "children"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
    startReached: u.Stream<number>;
    endReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
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
    gridState: u.StatefulStream<import("./gridSystem").GridState>;
    totalListHeight: u.StatefulStream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    totalCount: u.StatefulStream<number>;
    viewportDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    itemDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    scrollTop: u.Stream<number>;
    scrollHeight: u.Stream<number>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    scrollBy: u.Stream<ScrollToOptions>;
    scrollTo: u.Stream<ScrollToOptions>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    smoothScrollTargetReached: u.Stream<true>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<[number, number]>;
    deviation: u.StatefulStream<number>;
    scrollContainerState: u.Stream<[number, number]>;
    initialItemCount: u.StatefulStream<number>;
}>, {
    optional: {
        totalCount: "totalCount";
        overscan: "overscan";
        itemContent: "itemContent";
        components: "components";
        computeItemKey: "computeItemKey";
        initialItemCount: "initialItemCount";
        scrollSeekConfiguration: "scrollSeekConfiguration";
        listClassName: "listClassName";
        itemClassName: "itemClassName";
        useWindowScroll: "useWindowScroll";
        customScrollParent: "customScrollParent";
        scrollerRef: "scrollerRef";
        item: "item";
        ItemContainer: "ItemContainer";
        ScrollContainer: "ScrollContainer";
        ListContainer: "ListContainer";
        scrollSeek: "scrollSeek";
    };
    methods: {
        scrollTo: "scrollTo";
        scrollBy: "scrollBy";
        scrollToIndex: "scrollToIndex";
    };
    events: {
        isScrolling: "isScrolling";
        endReached: "endReached";
        startReached: "startReached";
        rangeChanged: "rangeChanged";
        atBottomStateChange: "atBottomStateChange";
        atTopStateChange: "atTopStateChange";
    };
}>>>;
export declare type foo<T> = T extends React.ForwardRefExoticComponent<React.RefAttributes<infer Handle>> ? Handle : never;
export declare type GridHandle = RefHandle<typeof Grid>;
export { Grid };
