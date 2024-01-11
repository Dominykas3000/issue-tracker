import prisma from '@/prisma/client';
import { Box } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';
interface Props {
  params: { id: string }
}


const LoadingIssueDetailPage = async ({ params }: Props) => {

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!issue)
    notFound()


  return (
    <div className='w-[100%] max-w-[700px]'>
      {/* <Grid columns={{ initial: "9", md: "3" }} gap="5"> */}
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box mt='5'>
        <EditIssueButton issueId={issue.id} />
      </Box>
      {/* </Grid> */}
    </div>
  )
}

export default LoadingIssueDetailPage