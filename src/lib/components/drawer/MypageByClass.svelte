<script lang="ts">
    import type {DrawerStore} from "@skeletonlabs/skeleton/dist/utilities/Drawer/stores";
    import {Avatar} from "@skeletonlabs/skeleton";
    import Icon from "svelte-icons-pack/Icon.svelte";
    import AiOutlineRight from "svelte-icons-pack/ai/AiOutlineRight";
    import {goto} from "$app/navigation";

    export let pageDrawerStore: DrawerStore;
    export let userMe;

    const logoutHandler = () => {
        goto('logout');
    }
</script>


<div class="flex px-6 py-6 bg-gray-100 justify-center items-center">

    <Avatar width="w-24" src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"/>
    <div class="flex flex-col ml-8">
        <h6 class="font-bold text-xl">{userMe.name}</h6>
        <p class="font-medium text-sm">학원: {userMe.institutes.map(value => value.name).join(', ')}</p>
    </div>

</div>

<div>
    <ul>
        <li class="border border-t-0">
            <button type="button" class="w-full p-4 flex justify-between items-center text-lg"><span>학원등록</span><Icon src="{AiOutlineRight}"/></button>
        </li>
        <li class="border border-t-0">
            <button type="button" class="w-full p-4 flex justify-between items-center text-lg"><span>비밀번호 재설정</span><Icon src="{AiOutlineRight}"/></button>
        </li>
        <li class="border border-t-0">
            <button type="button" class="w-full p-4 flex justify-between items-center text-lg"><span>약관 및 정책</span><Icon src="{AiOutlineRight}"/></button>
        </li>
        <li class="border border-t-0">
            <button type="button" class="w-full p-4 flex justify-between items-center text-lg"><span>고객센터</span><Icon src="{AiOutlineRight}"/></button>
        </li>
        <li class="border border-t-0">
            <button type="button" class="w-full p-4 flex justify-between items-center text-lg" on:click={logoutHandler}><span>로그아웃</span><Icon src="{AiOutlineRight}"/></button>
        </li>
    </ul>
</div>