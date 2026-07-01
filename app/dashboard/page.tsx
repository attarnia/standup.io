import SummaryCard from '@/components/ui/SummaryCard'
import Hero from '@/features/dashboard/components/Hero'
import TodayReports from '@/features/dashboard/components/today-reports/TodayReports'
import { ClipboardList, FolderKanban } from 'lucide-react'

const page = () => {
    return (
        <>
            <Hero />
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10">
                <SummaryCard
                    title="Total Projects"
                    value={4}
                    description="2 owned • 2 member"
                    icon={FolderKanban}
                />

                <SummaryCard
                    title="Today's Reports"
                    value="12"
                    description="Submitted today"
                    icon={ClipboardList}
                    iconBgClass="bg-orange-100/90"
                    iconClass="text-orange-600"
                />
            </section>
            <TodayReports />

        </>
    )
}

export default page