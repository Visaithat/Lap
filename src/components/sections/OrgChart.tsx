import { T } from '@/components/i18n';
import { Accordion } from '@/components/ui';
import type { AccordionItem } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { OrgNode } from '@/data/orgChart';

type OrgChartProps = {
  nodes: OrgNode[];
  rootId: string;
};

function buildIndex(nodes: OrgNode[]) {
  const byId = new Map<string, OrgNode>();
  for (const n of nodes) byId.set(n.id, n);
  return byId;
}

function NodeCard({
  node,
  level,
}: {
  node: OrgNode;
  level: number;
}) {
  return (
    <div
      className={cn(
        'border-lap-border inline-flex min-w-[160px] flex-col gap-1 rounded-2xl border px-5 py-3.5 text-center shadow-sm',
        level === 0
          ? 'bg-lap-primary-700 border-transparent text-white'
          : 'bg-white',
      )}
    >
      <span
        className={cn(
          'text-sm leading-tight font-bold',
          level === 0 ? 'text-white' : 'text-lap-primary-900',
        )}
      >
        <T lo={node.titleLo} en={node.titleEn} />
      </span>
      {(node.subtitleLo || node.subtitleEn) && (
        <span
          className={cn(
            'text-xs',
            level === 0 ? 'text-white/80' : 'text-lap-ink-600',
          )}
        >
          <T lo={node.subtitleLo ?? ''} en={node.subtitleEn ?? ''} />
        </span>
      )}
    </div>
  );
}

/**
 * Recursive tree renderer for desktop view. Connector lines drawn with
 * `::before` / `::after` pseudo-elements via tailwind utilities.
 */
function TreeBranch({
  node,
  byId,
  level,
}: {
  node: OrgNode;
  byId: Map<string, OrgNode>;
  level: number;
}) {
  const children = (node.childrenIds ?? [])
    .map((id) => byId.get(id))
    .filter((n): n is OrgNode => Boolean(n));

  return (
    <li
      className={cn(
        'relative flex list-none flex-col items-center',
        // vertical line up from this node (skip on root)
        level > 0 &&
          "before:bg-lap-border before:absolute before:top-[-2rem] before:left-1/2 before:h-8 before:w-px before:content-['']",
      )}
    >
      <NodeCard node={node} level={level} />
      {children.length > 0 && (
        <ul
          className={cn(
            "relative flex flex-wrap justify-center gap-6 pt-8",
            // vertical line down to children
            "before:bg-lap-border before:absolute before:top-0 before:left-1/2 before:h-8 before:w-px before:content-['']",
            // horizontal connector across children (only when >1)
            children.length > 1 &&
              "after:bg-lap-border after:absolute after:top-8 after:right-[5%] after:left-[5%] after:h-px after:content-['']",
          )}
        >
          {children.map((child) => (
            <TreeBranch
              key={child.id}
              node={child}
              byId={byId}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

/**
 * Build accordion items for the mobile collapse: every node with
 * children becomes an accordion section listing its child names.
 */
function buildAccordionItems(
  root: OrgNode,
  byId: Map<string, OrgNode>,
): AccordionItem[] {
  const items: AccordionItem[] = [];

  const visit = (node: OrgNode) => {
    const children = (node.childrenIds ?? [])
      .map((id) => byId.get(id))
      .filter((n): n is OrgNode => Boolean(n));
    if (children.length > 0) {
      items.push({
        value: node.id,
        title: <T lo={node.titleLo} en={node.titleEn} />,
        content: (
          <ul className="flex flex-col gap-2">
            {children.map((c) => (
              <li
                key={c.id}
                className="border-lap-border flex flex-col rounded-xl border px-3 py-2"
              >
                <span className="text-lap-primary-900 text-sm font-semibold">
                  <T lo={c.titleLo} en={c.titleEn} />
                </span>
                {(c.subtitleLo || c.subtitleEn) && (
                  <span className="text-lap-ink-600 text-xs">
                    <T lo={c.subtitleLo ?? ''} en={c.subtitleEn ?? ''} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        ),
      });
      children.forEach(visit);
    }
  };
  visit(root);
  return items;
}

/**
 * Root org-chart section. Desktop: horizontal flex tree with CSS
 * connector lines. Mobile (`< md`): nested accordion via the shared
 * `Accordion` primitive.
 */
export function OrgChart({ nodes, rootId }: OrgChartProps) {
  const byId = buildIndex(nodes);
  const root = byId.get(rootId);
  if (!root) return null;
  const accordionItems = buildAccordionItems(root, byId);

  return (
    <>
      {/* Desktop tree */}
      <div className="hidden overflow-x-auto pb-4 md:block">
        <ul className="flex min-w-[700px] justify-center">
          <TreeBranch node={root} byId={byId} level={0} />
        </ul>
      </div>
      {/* Mobile accordion */}
      <div className="md:hidden">
        <Accordion items={accordionItems} type="single" defaultValue={root.id} />
      </div>
    </>
  );
}
