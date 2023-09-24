<script>
    import { page } from '$app/stores';

    console.log($page.error);
</script>




<div class="flex flex-col items-center h-screen">
    <div class="bg-gradient-to-br from-point-market-gradient3-from to-point-market-gradient3-to text-white min-h-screen w-full">

        <div class="container mx-auto p-4 flex flex-wrap items-center">

            <div class="w-full text-center md:text-left p-4">
                <div class="text-6xl font-medium">Error</div>
                <div class="text-xl md:text-3xl font-medium mb-4">
                    Oops. This page has gone missing.
                </div>
                <div class="text-lg mb-8">
                    {$page.error.message}
                </div>
                <button class="border border-white rounded p-4">Go Home</button>
            </div>
        </div>

    </div>
</div>