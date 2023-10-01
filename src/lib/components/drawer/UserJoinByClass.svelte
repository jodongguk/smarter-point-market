<script lang="ts">
    import CameraIcon from "$lib/assets/images/camera_icon.svg";
    import {Step, Stepper} from "@skeletonlabs/skeleton";
    import UserService from "$data/service/UserService";
    import {goto} from "$app/navigation";
    import {InstituteListStore} from "$houdini";
    import type {DrawerStore} from "@skeletonlabs/skeleton/dist/utilities/Drawer/stores";

    export let pageDrawerStore: DrawerStore;

    let userid: String,
        password: String,
        replyPassword: String,
        name: String,
        phoneNumber: String,
        birthDate: String,
        businessRegistrationNumber: String,
        institutes: [],
        searchInstitutes = [];

    const searchInstituteByBusinessRegistrationNumber = (async () => {
        const instituteListStore = new InstituteListStore();
        const dataFields = {
            businessRegistrationNumber: businessRegistrationNumber
        };
        const fields = dataFields as Record<keyof typeof dataFields, string>;

        const result = await instituteListStore.fetch({variables: fields});
        searchInstitutes = result.data.institutes?.edges.map((e) => e.node);
    });

    const userJoinHandler = (async () => {
        await UserService.userJoin({
            userid,
            password,
            name,
            phoneNumber,
            birthDate,
            institutes: institutes.map((value, index) => {return {id: value}})
        });

        pageDrawerStore.close();
    })
</script>

<div class="p-6">
    <Stepper buttonBack="bg-white border border-[#DDDDDD] text-[#434343] p-3.5 rounded-lg tracking-wide font-bold font-display"
             buttonBackLabel="뒤로"
             buttonNext="bg-white border border-[#DDDDDD] text-[#434343] p-3.5 rounded-lg tracking-wide font-bold font-display"
             buttonNextLabel="다음"
             buttonComplete="bg-point-market-purple2 text-white p-3.5 rounded-lg tracking-wide font-bold font-display"
             buttonCompleteLabel="회원가입"
             on:complete={userJoinHandler}>

        <Step>
            <svelte:fragment slot="header">약관</svelte:fragment>
        </Step>

        <Step >
            <svelte:fragment slot="header">개인정보</svelte:fragment>

            <div class="w-full">
                <div class="flex flex-col justify-between w-full">
                    <div class="flex flex-col items-center mt-5">
                        <div class="relative">
                            <img src="" class="border-none rounded-full w-24 h-24 bg-white drop-shadow-lg">
                            <button class="absolute border-gray-300 border h-8 w-8 bg-white rounded-full bottom-0 right-0 ">
                                <img class="w-4 h-4 mx-auto" src="{CameraIcon}" />
                            </button>
                        </div>
                    </div>
                    <div class="mt-5">
                        <label class="text-point-market-gray1 font-semibold">아이디(이메일) <span class="text-point-market-purple1">*</span></label>
                        <input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
                               required
                               type="email"
                               name="userid"
                               placeholder="아이디"
                               bind:value={userid} />
                    </div>
                    <div class="mt-3">
                        <label class="text-point-market-gray1 font-semibold mb-1">비밀번호 <span class="text-point-market-purple1">*</span></label>
                        <input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
                               type="password"
                               name="password"
                               placeholder="비밀번호"
                               required
                               bind:value={password}/>
                    </div>
                    <div class="mt-3">
                        <label class="text-point-market-gray1 font-semibold mb-1">비밀번호 확인 <span class="text-point-market-purple1">*</span></label>
                        <input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
                               type="password"
                               placeholder="비밀번호 확인"
                               required
                               bind:value={replyPassword}/>
                    </div>
                    <div class="mt-3">
                        <label class="text-point-market-gray1 font-semibold">이름 <span class="text-point-market-purple1">*</span></label>
                        <input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
                               required
                               type="text"
                               name="name"
                               placeholder="이름"
                               bind:value={name}/>
                    </div>
                    <div class="mt-3">
                        <label class="text-point-market-gray1 font-semibold">휴대폰 번호 <span class="text-point-market-purple1">*</span></label>
                        <input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
                               required
                               type="number"
                               name="phoneNumber"
                               placeholder="'-' 구분없이 입력"
                               bind:value={phoneNumber}/>
                    </div>
                </div>
            </div>
        </Step>
        <Step >
            <svelte:fragment slot="header">학원정보</svelte:fragment>

            <div class="w-full">
                <div class="flex flex-col justify-between w-full">
                    <div class="mt-5">
                        <label class="text-point-market-gray1 font-semibold">사업자번호 <span class="text-point-market-purple1">*</span></label>
                        <div class="flex mt-1 ">
                            <input class="w-full text-lg rounded-l-lg px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
                                   required
                                   type="text"
                                   name="businessRegistrationNumber"
                                   placeholder="사업자번호"
                                   bind:value={businessRegistrationNumber} />
                            <button type="button"
                                    class="break-keep bg-point-market-purple2 text-white px-4 py-2 rounded-r-lg tracking-wide font-bold font-display"
                                    on:click={searchInstituteByBusinessRegistrationNumber}>조회</button>
                        </div>
                    </div>

                    <div>
                        {#each searchInstitutes as institute, i}
                            <div class="card p-4 mt-4">
                                <header class="card-header">
                                    <label class="flex items-center space-x-2">
                                        <input class="checkbox" type="checkbox" bind:group={institutes} value="{institute.id}"/>
                                        <h3 class="h3" data-toc-ignore="">{institute.name}</h3>
                                    </label>
                                </header>
                                <section class="p-4">
                                    <article>
                                        <p>{institute.addr1} {institute.addr2} ({institute.zip})</p>
                                    </article>
                                </section>
                                <hr class="opacity-50">
                                <footer class="p-4 flex justify-start items-center space-x-4">
                                    <div class="flex-auto flex justify-between items-center">
                                        <h6 class="font-bold" data-toc-ignore="">{institute.owner}</h6>
                                        <small>{institute.tel}</small>
                                    </div>
                                </footer>
                            </div>
                        {/each}

                        {#if searchInstitutes.length === 0}
                            <div class="card p-4 mt-4">
                                <h3 class="h3" data-toc-ignore="">조회 결과가 없습니다.</h3>
                            </div>
                            <button type="button" class="btn w-full bg-point-market-purple2 text-white p-3.5 rounded-lg tracking-wide font-bold font-display mt-5">신규 등록</button>
                        {/if}

                    </div>
                </div>
            </div>
        </Step>
    </Stepper>
</div>