<script>
    import SideBarItem from './SideBarItem.svelte';
    import MenuItem from './MenuItem.svelte';
	import SidebarMenu from '$data/classes/SidebarMenu';

    export let user;
	export let isSideBarOpened = false;

    let selectedMenu = [
		new SidebarMenu({
			name: '대시보드',
			link: '/dashboard',
			icon: 'fa-solid fa-chart-pie',
			subMenus: [],
		}),
		new SidebarMenu({
			name: '원생정보',
			link: '/student',
			icon: 'fa-solid fa-children',
			subMenus: [],
		}),
		new SidebarMenu({
			name: '출결관리',
			link: '/attendance',
			icon: 'fa-solid fa-clipboard-user',
			subMenus: [],
		}),
		new SidebarMenu({
			name: '승급관리',
			link: '/audition',
			icon: 'fa-solid fa-turn-up',
			subMenus: [],
		}),
		new SidebarMenu({
			name: '원비관리',
			link: '/payments',
			icon: 'fa-solid fa-scroll',
			subMenus: [],
		}),
		new SidebarMenu({
			name: '게시판',
			link: '/a0001',
			icon: 'fa-regular fa-comment',
			subMenus: [],
		}),
		new SidebarMenu({
			name: '캘린더',
			link: '/a0001',
			icon: 'fa-solid fa-calendar-days',
			subMenus: [],
		}),
		new SidebarMenu({
			name: '쇼핑',
			link: '/a0001',
			icon: 'fa-solid fa-cart-plus',
			subMenus: [],
		}),
		new SidebarMenu({
			name: 'My Page',
			link: '/a0001',
			icon: 'fa-solid fa-user-gear',
			subMenus: [],
		}),
		new SidebarMenu({
			name: 'Settings',
			link: '/a0001',
			icon: 'fa-solid fa-gear',
			subMenus: [],
		}),
	];
</script>


<div class="flex">
	<div class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden {isSideBarOpened ? 'block' : 'hidden'}" on:click></div>
	<div class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-smarterMain lg:translate-x-0 lg:static lg:inset-0 {isSideBarOpened ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}">
		<div class="flex items-center justify-center mt-8">
			<div class="flex items-center">
				<span class="mx-2 text-2xl font-semibold text-white">SMARTER PLUS</span>
			</div>
		</div>

		<nav class="mt-10">
			{#each selectedMenu as menu}
				<SideBarItem>
					<MenuItem menuItem={menu} />
				</SideBarItem>
			{/each}
		</nav>
	</div>
</div>
