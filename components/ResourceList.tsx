/** @format */

import { ResourcesTypes } from "./types/types";

interface ResourceListPropsI {
  resources: ResourcesTypes[];
}

const ResourceList = ({ resources }: ResourceListPropsI) => {
  return (
    <section className='hero '>
      <div className='hero-body'>
        <div className='container'>
          <section className='section'>
            {resources.map((resource: ResourcesTypes) => {
              return (
                <div
                  key={resource.id}
                  className='columns is-multiline is-variable is-8'>
                  <div className='column is-5 is-offset-1 '>
                    <div className='content is-medium'>
                      <h2 className='subtitle is-5 has-text-grey'>
                        {resource.createdAt()}
                      </h2>
                      <h1 className='title has-text-black is-3'>
                        {resource.title}
                      </h1>
                      <p className='has-text-dark'>{resource.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </section>
  );
};

export default ResourceList;
