<script>
	import '../app.css';
</script>

<div class="lg:flex justify-center">
    <div class="flex flex-col items-center justify-center h-screen">
        <div class="px-6 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <slot></slot>
        </div>
    </div>
</div>