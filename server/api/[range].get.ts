import pathe from "pathe";

export default defineCachedEventHandler((event) => {
    const rangeRouterParam = getRouterParam(event, "range");

    if (!rangeRouterParam) {
        return;
    }

    return proxyRequest(
        event,
        pathe.join("https://api.pwnedpasswords.com/range", rangeRouterParam)
    );
});
