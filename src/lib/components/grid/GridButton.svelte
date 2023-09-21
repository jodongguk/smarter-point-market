<script lang="ts">

    export let gradient: string, title: string, addClass: String;

</script>

<button class="w-full h-24 min-h-0 rounded-2xl bg-gradient-to-br from-{gradient}-from to-{gradient}-to {addClass}" on:click>
    <div class="flex justify-center items-center">
        <h2 class="text-2xl text-white font-bold">{title}</h2>
    </div>
</button>