/** @format */

import { ResourcesTypes } from "./types/types";

interface ResourceHighlightsPropsI {
  resources?: ResourcesTypes[];
}

const ResourceHighlights = ({ resources }: ResourceHighlightsPropsI) => {
  return (
    <section className='hero '>
      <div className='hero-body'>
        <div className='container'>
          {resources &&
            resources.map((resource: ResourcesTypes) => {
              return (
                <section key={resource.id} className='section'>
                  <div className='columns'>
                    <div className='column is-8 is-offset-2'>
                      <div className='content is-medium'>
                        <h2 className='subtitle is-4'>{resource.createdAt}</h2>
                        <h1 className='title'>{resource.title}</h1>
                        <p>{resource.description}</p>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ResourceHighlights;
