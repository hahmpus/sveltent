import type { SvelteComponent } from 'svelte'
import { get, writable } from "svelte/store"

export type Action = 'push' | 'pop'
export type SvelteModalComponent<
  Props extends Record<string, any> = any,
  Events extends Record<string, any> = any,
  Slots extends Record<string, any> = any
> = new (...args: any) => SvelteComponent<Props, Events, Slots>

export type LazySvelteModalComponent<
  Props extends Record<string, any> = any,
  Events extends Record<string, any> = any,
  Slots extends Record<string, any> = any
> = () => Promise<{ default: SvelteModalComponent<Props, Events, Slots> }>

interface StoredModal {
    component: SvelteModalComponent<any> | LazySvelteModalComponent<any> | any, //HKTODO REMOVE ANY
    props?: Record<string, unknown>,
    callbacks?: {
        onBeforeClose?: () => boolean | void
    }
}

export const modals = writable<StoredModal[]>([])
export const exitBeforeEnter = writable(false)
export const transitioning = writable<boolean | null>(null)
export const action = writable<Action | null>(null)

export function openModal<Props extends Record<string, any> = any>(
    component: any,
    props?: Omit<Props, 'isOpen'>,
    options?: {
        replace?: boolean
    }
): void {

    if(get(transitioning)) {
        return
    }

    action.set('push')

    if(get(exitBeforeEnter) && get(modals).length > 0) {
        transitioning.set(true)        
    }

    exitBeforeEnter.set(false)

    if(options?.replace) {
        modals.update((prev) => [...prev.slice(0, prev.length - 1), { component, props }] as StoredModal[])
    } else {
        modals.update((prev) => [...prev, { component, props }] as StoredModal[])
    }

}

export function closeModals(amount: number = 1): boolean {
    const length = get(modals).length
    const current = get(modals)[length - 1]

    if(get(transitioning)) {
        return false
    }

    if (current?.callbacks?.onBeforeClose) {
        if (current?.callbacks?.onBeforeClose() === false) {
          return false
        }
      }

    if (get(exitBeforeEnter) && length > 0) {
        transitioning.set(true)
    }

    exitBeforeEnter.set(false)
    action.set('pop')

    popModals(amount)

    return true
}

export function closeModal(): boolean {
    return closeModals(1)
}

export function onBeforeClose(callback: () => boolean | void): void {
    modals.update((prev) => {
        const modal = prev[prev.length - 1]
        modal.callbacks = {
        ...modal.callbacks,
        onBeforeClose: callback
    }

        return prev
    })
}

function popModals(amount: number) {
    modals.update((prev) => prev.slice(0, Math.max(0, prev.length - amount)))
}