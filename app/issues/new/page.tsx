'use client';
import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface issueForm {
  title: string,
  description: string,
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<issueForm>();

  return (
    <form
      className='max-w-xl space-y-3'
      onSubmit={handleSubmit(async (data) =>{ 
        await axios.post('/api/issues', data);
        router.push('/issues');
      })}>
      
      <TextField.Root>
        <TextField.Input placeholder='title' {...register('title')} />
      </TextField.Root>
      
      <Controller
        name='description'
        control={control}
        render={({ field }) => <SimpleMDE placeholder='body' {...field} />}
      />
      
      <Button>
        Submit new issue
      </Button>
    </form>
  )
}

export default NewIssuePage