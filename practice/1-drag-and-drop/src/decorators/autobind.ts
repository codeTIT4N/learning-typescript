// Autobind decorator
export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const orgMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = orgMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}