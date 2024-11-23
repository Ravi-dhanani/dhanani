import DefaultLayout from "@/components/Layouts/DefaultLayout";
type Props = {
  children: any;
};

export default function layout({ children }: Props) {
  return (
    <div>
      <DefaultLayout>{children}</DefaultLayout>
    </div>
  );
}
