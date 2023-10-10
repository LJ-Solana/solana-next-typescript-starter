import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function BoxInputForm() {
const [sets, setSets] = useState([]);

useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/sets')
      .then(response => {
        const setsData = response.data.data;
        const options = setsData.reduce((unique, set) => {
            unique.push({
              value: set.id,
              box: set.name,
              releaseDate: set.releaseDate,
              logo: set.images.logo
            });
          return unique;
        }, []);
        setSets(options);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <form>
      <div className="space-y-12 sm:space-y-16">
        <div>
          <h2 className="text-base font-semibold leading-7 pt-10 text-white">Tokenise your Pokemon Trading Card Box</h2>
          
            <p className="mt-1 max-w-2xl text-sm leading-6 text-pink-200">
                This information will be displayed publicly as it mints a token to represent the physical trading card box on the Solana blockchain. Please make sure to take time and select the right options, complete on your mobile phone so you can scan the box.
            </p>

                <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="series" className="block text-sm font-medium leading-6 text-gray-200 sm:pt-1.5">
                        Series
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-2">
                        <select
                            name="series"
                            id="series"
                            autoComplete="series"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        >
                            <option value="Scarlet & Violet Series">Scarlet & Violet Series</option>
                            <option value="Jungle">Jungle</option>
                            <option value="Fossil">Fossil</option>
                            <option value="Base Set 2">Base Set 2</option>
                            <option value="Team Rocket">Team Rocket</option>
                            <option value="Gym Heroes">Gym Heroes</option>
                            <option value="Gym Challenge">Gym Challenge</option>
                            <option value="Neo Genesis">Neo Genesis</option>
                            <option value="Neo Discovery">Neo Discovery</option>
                            <option value="Neo Revelation">Neo Revelation</option>
                            <option value="Neo Destiny">Neo Destiny</option>
                            <option value="Legendary Collection">Legendary Collection</option>
                            <option value="Expedition">Expedition</option>
                            <option value="Aquapolis">Aquapolis</option>
                            <option value="Skyridge">Skyridge</option>
                            <option value="EX Ruby & Sapphire">EX Ruby & Sapphire</option>
                        </select>
                        </div>
                    </div>
                </div>
            
                <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="box" className="block text-sm font-medium leading-6 text-gray-200 sm:pt-1.5">
                        Box 
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-2">
                        <select
                            name="box"
                            id="box"
                            autoComplete="box"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        >
                            {sets.map(set => (
                            <option value={set.box}>{set.box}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-200 sm:pt-1.5">
                Release Date
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-2">
                  <select
                    name="year"
                    id="year"
                    autoComplete="year"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  >
                    {Array.from({length: 28}, (_, i) => i + 1996).map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-200 sm:pt-1.5">
                Value Estimate ($)
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md px-2">
                  <input
                    type="number"
                    name="year"
                    id="year"
                    autoComplete="year"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="e.g. 200"
                  />
                </div>
              </div>
            </div>
          </div>

          <fieldset>
              <legend className="sr-only">Condition</legend>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6">
                <div className="text-sm font-semibold leading-6 text-gray-200" aria-hidden="true">
                  Condition Status
                </div>
                <div className="mt-4 sm:col-span-2 sm:mt-0">
                  <div className="max-w-lg space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="comments" className="font-medium text-gray-200">
                          Mint
                        </label>
                        <p className="mt-1 text-gray-200">Get notified when someones posts a comment on a posting.</p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="candidates" className="font-medium text-gray-200">
                          Near Mint
                        </label>
                        <p className="mt-1 text-gray-200">Get notified when a candidate applies for a job.</p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="offers" className="font-medium text-gray-200">
                          Used
                        </label>
                        <p className="mt-1 text-gray-200">Get notified when a candidate accepts or rejects an offer.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-200 sm:pt-1.5">
                Inventory Photo
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-200" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-200">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-200">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
        </div>


        <div>
          <div className="mt-10 space-y-10 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <fieldset>
              <legend className="sr-only">Push Notifications</legend>
              <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4 sm:py-6">
                <div className="text-sm font-semibold leading-6 text-gray-200" aria-hidden="true">
                  Push Notifications
                </div>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="max-w-lg">
                    <p className="text-sm leading-6 text-gray-200">These are delivered via SMS to your mobile phone.</p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-200">
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-200">
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-200">
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-200">
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

