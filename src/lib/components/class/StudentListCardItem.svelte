<script lang="ts">
import {goto} from "$app/navigation";

export let student;

</script>

<div class="mt-4 !z-5 relative flex flex-col rounded-xl max-w-[320px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
    <div class="h-full w-full" on:click={() => {goto(`/student/edit/${student.studentId}`)}}>
        <div class="mb-3 flex items-center justify-between px-1 md:items-start">
            <div class="mb-2">
                <p class="text-lg font-bold text-navy-700"> {student.name}</p>
                <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">{student.classMaster.name}</p>
            </div>
            <div class="flex flex-row md:mt-2 lg:mt-0">
                <span class="text-lg mr-3">급수: {student.level.name}</span>
                <span class="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs text-white font-bold bg-green-500">PASS</span>
            </div>
        </div>
        <div class="flex items-center justify-between md:items-center lg:justify-between ">
            <div class="flex">
                <p class="!mb-0 text-sm font-bold text-brand-500">
                    보호자 {student.parent.user.name} ({student.parent.user.phone})
                </p>
            </div>
            <button class="rounded-2xl bg-orange-400 px-4 py-2 text-base font-medium text-white">{student.status}</button>
        </div>
    </div>
</div>