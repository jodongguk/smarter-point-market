<script lang="ts">

export let theadList = [];
</script>

<table class="border-collapse w-full">
    <thead class="bg-gray-50">
        {#each theadList as thead, i}
            <th class="px-6 py-4 font-medium text-gray-900 hidden lg:table-cell">{thead}</th>
        {/each}
    </thead>
    <tbody>
        <slot />
    </tbody>
</table>