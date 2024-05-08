import { supabase } from "./supabase";


export async function  getTasks(){
    let { data: tasks, error } = await supabase
    .from('Tasks')
    .select('*')
    return {tasks,error}
}
