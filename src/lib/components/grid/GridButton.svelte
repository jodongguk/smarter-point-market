<script lang="ts">

    export let gradient: string, title: string;

</script>

<button class="w-full h-0 aspect-w-1 aspect-h-1 rounded-2xl bg-gradient-to-br from-{gradient}-from to-{gradient}-to" on:click>
    <div class="flex justify-center items-center">
        <h2 class="text-2xl text-white font-bold">{title}</h2>
    </div>
</button>