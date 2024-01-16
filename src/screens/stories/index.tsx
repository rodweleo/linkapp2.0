import { StoryListItem } from "../../ui/components/stories/story_list_item";

export const Stories = () => {
  return (
    <main className="px-2.5">
      <h2>Stories</h2>
      <section className="flex flex-col gap-2.5">
        <StoryListItem />
        <div>
          <h3 className="text-slate-600">
            <strong>Recent Updates</strong>
          </h3>
          <ul className="flex flex-col divide-y gap-2">
            <li>
              <StoryListItem />
            </li>
            <li>
              <StoryListItem />
            </li>
            <li>
              <StoryListItem />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
