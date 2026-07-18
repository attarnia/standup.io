import MembersSkeleton from "@/features/dashboard/components/members/MemberSkeleton";
import MemberWrapper from "@/features/dashboard/components/members/MemberWrapper";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{
    workspace?: string;
  }>;
};

export default function UsersPage({ searchParams }: Props) {
  return (
    <Suspense fallback={<MembersSkeleton />}>
      <MemberWrapper searchParams={searchParams} />
    </Suspense>
  );
}
