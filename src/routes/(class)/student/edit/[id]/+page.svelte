<script lang="ts">
	export let data;

	let student = data.student;

	/*async function save() {
		if (
			!gym.name ||
			!gym.user.name ||
			!gym.user.phone ||
			!gym.businessRegistrationNumber
		) {
			return alert(
				'필수항목을 모두 입력해주세요.'
			);
		}
		if (confirm('저장하시겠습니까?')) {
			let input = { ...gym };
			delete input.gymId;
			input.businessRegistrationCertificate =
				input.businessRegistrationCertificateFile;
			delete input.businessRegistrationCertificateFile;
			if (input.agency) {
				input.agencyId = input.agency.agencyId;
			}
			delete input.agency;
			input.user.id = input.user.userId;
			delete input.user.userId;

			const result = await updateGym(input);
			if (result.success) {
				alert('저장되었습니다.');
				return history.back();
			}
			if (result.duplicated) {
				return alert(
					'중복된 아이디입니다. 다른 아이디를 입력해주세요.'
				);
			}
			alert('실패');
		}
	}*/
</script>

<div>
	{JSON.stringify(student)}
</div>