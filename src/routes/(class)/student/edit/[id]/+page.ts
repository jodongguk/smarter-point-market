import StudentService from "$data/services/StudentService";
import type {Page} from "@sveltejs/kit";

export async function load({ params, url }: Page) {
	const id = +params.id;

	const student = await StudentService.getStudent({id});
	return student;
}