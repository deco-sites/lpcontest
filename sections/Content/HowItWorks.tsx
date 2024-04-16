import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  title: HTMLWidget;
  subTitle: string;
  description: HTMLWidget;
}

const DEFAULT_TEXT =
  '<p><span style="font-size: 36pt;" data-mce-style="font-size: 36pt;"><strong>Rich Text</strong></span></p><p><span style="font-size: 24pt;" data-mce-style="font-size: 24pt;"><strong>Rich Text</strong></span></p><p><span style="font-size: 18pt;" data-mce-style="font-size: 18pt;"><strong>Rich Text</strong></span></p><p><span style="font-size: 14pt;" data-mce-style="font-size: 14pt;"><strong>Rich Text</strong></span></p>';

export default function HowItWorks(
  { title = DEFAULT_TEXT, subTitle, description }: Props,
) {
  return (
    <section class="relative py-20 max-w-screen">
      <div class="mx-6 lg:container lg:mx-auto flex justify-center items-center flex-col gap-16">
        <h2
          class="font-medium text-white text-[36px] lg:text-[72px] text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <div className="flex justify-center items-center gap-16">
          <div className="p-8 lg:p-16 bg-[#000D0D] rounded-3xl flex-col justify-start items-center gap-6 flex">
            <h3 className="text-white text-[40px] font-semibold font-['Albert Sans']">
              {subTitle}
            </h3>
            <div className="divider" />
            <div
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <a
              href="https://discord.com/channels/985687648595243068/1215655908630208512"
              target="_blank"
              className="px-8 py-3 absolute bottom-[-52px] md:bottom-[-28px] lg:bottom-[52px] bg-[#02F67C] rounded-full justify-start items-center gap-2 inline-flex"
            >
              <span className="text-black text-xl font-medium font-['Albert Sans']">
                Enroll now on Landing Page Contest
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
