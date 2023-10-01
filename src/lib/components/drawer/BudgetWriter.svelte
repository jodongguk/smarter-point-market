<script lang="ts">
    import {Step, Stepper} from "@skeletonlabs/skeleton";
    import {formatNumberCommaText} from "$lib/utils/FormatData";
    import {BudgetSaveStore} from "$houdini";
    import type {DrawerStore} from "@skeletonlabs/skeleton/dist/utilities/Drawer/stores";
    import {get} from "svelte/store";
    import {userSelectInstitute} from "$lib/stores";
    import {invalidateAll} from "$app/navigation";

    export let pageDrawerStore: DrawerStore;

    $: selectInstitute = get(userSelectInstitute);

    let budgetAmount;
    let budgetStartDate;
    let budgetEndDate;

    $: budgetAmountCharge = Math.floor(budgetAmount * 0.06);
    $: budgetAmountPrice = budgetAmount + budgetAmountCharge;

    const changedBudgetAmound = (amount: Number) => {
        budgetAmount = amount;
    }

    const onNextHandler = (e: Event) => {
        console.log(e)
        return false;
    }

    const onStepHandler = (e: Event) => {
        console.log(e)
    }
    const onCompleteHandler = async (e: Event): void => {
        const budgetSaveStore = new BudgetSaveStore();
        await budgetSaveStore.mutate({
            institueId: selectInstitute.id,
            startDate: budgetStartDate,
            endDate: budgetEndDate,
            budgetAmount: budgetAmount
        });
        pageDrawerStore.close();
        await invalidateAll();
    }
</script>


<div class="p-8">

    <Stepper buttonBack="bg-white border border-[#DDDDDD] text-[#434343] p-3.5 rounded-lg tracking-wide font-bold font-display"
             buttonBackLabel="뒤로"
             buttonNext="bg-white border border-[#DDDDDD] text-[#434343] p-3.5 rounded-lg tracking-wide font-bold font-display"
             buttonNextLabel="다음"
             buttonComplete="bg-point-market-purple2 text-white p-3.5 rounded-lg tracking-wide font-bold font-display"
             buttonCompleteLabel="결제하기"
             on:next={onNextHandler}
             on:step={onStepHandler}
             on:complete={onCompleteHandler}>
        <Step>
            <svelte:fragment slot="header"></svelte:fragment>
            <div class="bg-point-market-purple2 text-white p-3.5 w-full rounded-lg tracking-wide font-bold font-display">
                <input type="number" class="w-full h-12 px-4 text-3xl font-medium rounded-lg font-black text-right text-black"
                       bind:value={budgetAmount}
                       placeholder="100,000"/>
            </div>

            <div class="flex flex-wrap">
                {#each {length: 10} as _, i}
                    <div class="w-1/5 mb-2">
                        <button type="button" class="border rounded-lg p-1 whitespace-nowrap text-point-market-gray1" on:click={() => changedBudgetAmound((i+1) * 100000)}>{(i+1) * 10} 만원</button>
                    </div>
                {/each}
            </div>

            <div class="flex space-x-4 bg-point-market-purple2 text-white p-3.5 w-full rounded-lg tracking-wide font-bold font-display ">

                <input type="date" class="w-full h-12 px-4 text-sm font-medium rounded-lg font-black text-center text-black" bind:value={budgetStartDate} placeholder=""/>

                <input type="date" class="w-full h-12 px-4 text-sm font-medium rounded-lg font-black text-center text-black" bind:value={budgetEndDate} placeholder=""/>
            </div>
        </Step>
        <Step>
            <svelte:fragment slot="header"></svelte:fragment>

            <div class="p-4 bg-gray-100 shadow-lg border rounded-lg">
                <p class="text-point-market-purple1 text-center font-semibold mb-4">{budgetStartDate} ~ {budgetEndDate}</p>
                <p class="text-point-market-purple1 text-center text-2xl font-bold">{formatNumberCommaText(budgetAmount)} 원</p>
            </div>

            <hr class="h-px bg-gray-600 border-0 block" />

            <dl class="flex-wrap flex ">
                <dt class="w-1/2 mb-2 text-center">미션포인트 예산금액</dt>
                <dd class="w-1/2 mb-2 text-right">{formatNumberCommaText(budgetAmount)} 원</dd>
                <dt class="w-1/2 mb-2 text-center">카드 결제 및 운영 수수료</dt>
                <dd class="w-1/2 mb-2 text-right">{formatNumberCommaText(budgetAmountCharge)} 원</dd>

                <dt class="w-1/2 mb-2 pt-4 text-center border-t border-gray-600">결제 금액</dt>
                <dd class="w-1/2 mb-2 pt-4 text-right border-t border-gray-600">{formatNumberCommaText(budgetAmountPrice)} 원</dd>
            </dl>

        </Step>
    </Stepper>
</div>