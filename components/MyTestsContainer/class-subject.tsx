import type { TestRecord } from "@/lib/tests";
import { classLabel } from "./format";

const subjectColor: Record<TestRecord["subject"], string> = {
  Maths: "text-[#2563EB]",
  English: "text-[#A855F7]",
  Science: "text-[#16A34A]",
  "Social Science": "text-[#D97706]",
};

type ClassSubjectProps = {
  test: TestRecord;
};

export function ClassSubject({ test }: ClassSubjectProps) {
  return (
    <div>
      <p className="text-sm whitespace-nowrap text-ink">
        {classLabel(test.className)}
      </p>
      <p className={`mt-0.5 text-xs ${subjectColor[test.subject]}`}>
        {test.subject === "Maths" ? "Mathematics" : test.subject}
      </p>
    </div>
  );
}
