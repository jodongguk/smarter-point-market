<script lang="ts">
    import {goto} from '$app/navigation';
    import {enhance, applyAction} from '$app/forms'
    import logo from "$lib/assets/images/institute_icon.svg";
    import AuthLogo from "$lib/components/common/AuthLogo.svelte";
    import KakaoIcon from "$lib/assets/images/kakao_icon.svg";
    import {authFromSubmitting} from "$lib/stores";
    import {page} from "$app/stores";
    import type { DrawerSettings} from "@skeletonlabs/skeleton";
    import {getDrawerStore} from "@skeletonlabs/skeleton";

    let userid: string;
    let password: string;
    let missing: string[] = [];

    const from = $page.url.searchParams.get("from");

    const drawerStore = getDrawerStore();
    const joinPageHandler = () => {
        const settings: DrawerSettings = {
            id: 'userJoinByClass',
            position: 'left',
            width: 'w-full',
            meta: {
                title: "회원가입"
            }
        };
        drawerStore.open(settings);
    }
</script>

<svelte:head>
</svelte:head>

<div class="flex flex-col items-center h-screen">
    <div class="flex flex-col h-full justify-center items-center px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">

        <AuthLogo {logo} />

        <div class="w-full">
            <form method="POST" use:enhance={() => {
                    authFromSubmitting.set(true);
                    return async ({ result }) => {
                        if (result.type === "failure" && result.data?.missing) {
                            missing = result.data.missing;
                            return;
                        }

                        applyAction(result);
                        authFromSubmitting.set(false);
                    };
            }}>
                <div>
                    <input class="w-full text-lg rounded-lg px-4 py-3 bg-gray-100 focus:outline-point-market-purple1 "
                           required
                           name="userid"
                           type="text"
                           placeholder="아이디"
                           bind:value={userid}/>
                </div>
                <div class="mt-3">
                    <input class="w-full text-lg rounded-lg px-4 py-3 bg-gray-100 focus:outline-point-market-purple1 "
                           type="password"
                           name="password"
                           placeholder="비밀번호"
                           required
                           bind:value={password}/>
                </div>
                <div class="mt-10 flex flex-col space-y-2">
                    <button type="submit"
                            class="bg-point-market-purple2 text-white p-3.5 w-full rounded-lg tracking-wide font-bold font-display">
                        로그인
                    </button>
                    <button type="button" class="bg-white border border-[#DDDDDD] text-[#434343] p-3.5 w-full rounded-lg tracking-wide font-bold font-display" on:click={joinPageHandler}>
                        회원가입
                    </button>
                </div>
            </form>
        </div>
        <div class="flex flex-row justify-between mt-3">
            <button class="text-sm font-semibold text-[#434343]">아이디/비밀번호 찾기</button>
            <button class="text-sm font-semibold text-[#434343] flex flex-row items-center">
                <img class="w-4 mr-1" src="{KakaoIcon}"/> 카카오톡 실시간 문의
            </button>
        </div>

        <div class="flex flex-col mt-6">
            <h2 class="text-md font-bold text-[#434343] text-center">대표번호 <a>1533-4147</a></h2>
            <p class="text-sm font-semibold text-[#999999] text-center mt-4">계속 진행하시는 경우 스마터의 이용약관에 동의하고스마터의 개인정보 사용동의 정책을 읽었음을 확인한것으로 간주합니다.</p>
        </div>

    </div>
</div>