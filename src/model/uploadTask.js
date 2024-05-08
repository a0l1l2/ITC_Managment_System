import { supabase } from "./supabase";


export async function uploadTask(task){
    console.log(task);
const { data, error } = await supabase
  .from('Tasks')
  .insert([task])
  .select()

  console.log(error);

  return {data,error}
}