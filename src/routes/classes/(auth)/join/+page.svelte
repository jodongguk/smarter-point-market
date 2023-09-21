<script lang="ts">
	import {enhance, applyAction} from '$app/forms'
	import CameraIcon from "$lib/assets/images/camera_icon.svg";
	import {authFromSubmitting} from "$lib/stores";

	let userid: String;
	let password: String;
	let replyPassword: String;
	let name: String;
	let phoneNumber: String;
	let birthDate: String;

	let missing: string[] = [];

</script>

<svelte:head>
</svelte:head>

<div class="flex flex-col h-full justify-center items-center h-screen px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl bg-[#F9FBFF]">

	<div class="w-full">
		<form method="POST" use:enhance={() => {
			authFromSubmitting.set(true);
			return async ({ result }) => {
				if (result.type === "failure" && result.data?.missing) {
					missing = result.data.missing;
					return;
				}

				applyAction(result);
				authFromSubmitting.set(false);
			};
		}}>
			<div class="flex flex-col justify-between min-h-screen w-full">

				<div>
					<div class="flex flex-col items-center mt-5">
						<div class="relative">
							<img src="" class="border-none rounded-full w-24 h-24 bg-white drop-shadow-lg">
							<button class="absolute border-gray-300 border h-8 w-8 bg-white rounded-full bottom-0 right-0 ">
								<img class="w-4 h-4 mx-auto" src="{CameraIcon}" />
							</button>
						</div>
					</div>
					<div class="mt-5">
						<label class="text-point-market-gray1 font-semibold">아이디(이메일) <span class="text-point-market-purple1">*</span></label>
						<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
							   required
							   type="email"
							   name="userid"
							   placeholder="아이디"
							   bind:value={userid} />
					</div>
					<div class="mt-3">
						<label class="text-point-market-gray1 font-semibold mb-1">비밀번호 <span class="text-point-market-purple1">*</span></label>
						<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
							   type="password"
							   name="password"
							   placeholder="비밀번호"
							   required
							   bind:value={password}/>
					</div>
					<div class="mt-3">
						<label class="text-point-market-gray1 font-semibold mb-1">비밀번호 확인 <span class="text-point-market-purple1">*</span></label>
						<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
							   type="password"
							   placeholder="비밀번호 확인"
							   required
							   bind:value={replyPassword}/>
					</div>
					<div class="mt-3">
						<label class="text-point-market-gray1 font-semibold">이름 <span class="text-point-market-purple1">*</span></label>
						<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
							   required
							   type="text"
							   name="name"
							   placeholder="이름"
							   bind:value={name}/>
					</div>
					<div class="mt-3">
						<label class="text-point-market-gray1 font-semibold">휴대폰 번호 <span class="text-point-market-purple1">*</span></label>
						<input class="w-full text-lg rounded-lg mt-1 px-4 py-2 border border-gray-200 focus:outline-point-market-purple1 "
							   required
							   type="number"
							   name="phoneNumber"
							   placeholder="'-' 구분없이 입력"
							   bind:value={phoneNumber}/>
					</div>

				</div>

				<div class="my-6">
					<button type="submit" class="bg-point-market-purple2 text-white py-3 w-full rounded-full tracking-wide font-bold font-display">
						가입하기
					</button>
				</div>
			</div>
		</form>
	</div>
</div>