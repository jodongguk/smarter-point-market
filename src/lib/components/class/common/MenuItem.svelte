<script>
	import { goto } from '$app/navigation';

	export let menuItem;

	let open = false;
	let easyOrderCount = 0;
	let name = menuItem.name;
	function toggle() {
		open = !open;
	}
</script>

<!--<a aria-current="page" href="/dashboard" class="router-link-active router-link-exact-active flex items-center px-6 py-2 mt-4 duration-200 border-l-4 bg-gray-600 bg-opacity-25 text-white border-gray-100">-->
<a class="flex items-center px-6 py-2 mt-4 duration-200 text-white hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
   href={menuItem.link ? menuItem.link : '/'} on:click|preventDefault={menuItem.link ? goto(menuItem.link) : toggle}>
	<i class="mr-3 w-5 {menuItem.icon}" /> <span class="">{menuItem.name}</span>
</a>
