import {type Writable, writable} from "svelte/store";
import {localStorageStore} from "@skeletonlabs/skeleton";

export const authFromSubmitting = writable(false);
export const userSelectInstitute:Writable<object> = localStorageStore('userSelectInstitute', {});
export const userSelectChildren:Writable<object> = localStorageStore('userSelectChildren', {});
