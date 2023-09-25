<script lang="ts">
    import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
    const drawerStore = getDrawerStore();

    const budgetWriteDrawer = () => {
        const settings: DrawerSettings = {
            id: 'budgetWriteDrawer',
            position: 'left',
            width: 'w-full',
            meta: {
                title: "예산 세우기"
            }
        };
        drawerStore.open(settings);
    }
</script>


<div class="flex flex-col space-y-4 p-4 --color-surface-400">

    <button class="bg-point-market-purple2 text-white p-3.5 w-full rounded-lg tracking-wide font-bold font-display" on:click={budgetWriteDrawer}>
        + 신규예산등록
    </button>

    <div class="m-auto h-52 w-full max-w-md bg-white shadow p-2 border-t-4 border-point-market-purple1 rounded">
        <header class="p-2 border-b flex">
            <div class="flex flex-col">
                <h4 class="text-lg font-semibold">예산 설정 정보</h4>
                <h1 class="text-lg text-green-600">300,000원</h1>
            </div>
        </header>
        <div class="flex flex-wrap p-2 w-full gap-4 justify-between">
            <div class="flex flex-col w-full">
                <h4 class="text-xs">예산 사용 기간</h4>
                <h1 class="text-lg">2023.09.01 ~ 2023.09.31</h1>
            </div>
            <div class="flex flex-col">
                <h4 class="text-xs">정산 예정일</h4>
                <h1 class="text-md">2023.10.01</h1>
            </div>
            <!--<div class="flex flex-col">
                <h4 class="text-xs">예상 환급 비율</h4>
                <h1 class="text-md font-thin">100원 = 100Point</h1>
            </div>-->
        </div>
    </div>


</div>