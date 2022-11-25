export function Autobind(_, _2, descriptor) {
    const orgMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = orgMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
//# sourceMappingURL=autobind.js.map