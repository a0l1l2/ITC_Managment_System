import { supabase } from "./supabase";


export async function uploadTask(task){
 
const { data, error } = await supabase
  .from('Tasks')
  .insert([task])
  .select()



  return {data,error}
}