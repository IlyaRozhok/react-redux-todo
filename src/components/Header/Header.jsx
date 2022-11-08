import {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartBarIcon,
    PlayIcon,
    Squares2X2Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import {ChevronDownIcon, MusicalNoteIcon, StarIcon} from '@heroicons/react/20/solid';
import brainLogo from '../../assets/img/brain.png'
import {useDispatch, useSelector} from "react-redux";
import {createModeHandler, tipsHandler} from "../../store/taskSlice";

const solutions = [
    {
        name: 'Be productive',
        description: '14 Tips to Improve Your Concentration.',
        href: 'https://www.healthline.com/health/mental-health/how-to-improve-concentration',
        icon: ChartBarIcon,
    },
    {
        name: 'Be restored',
        description: 'The importance of sleep and recovery',
        href: 'https://blog.nasm.org/exercise-programming/the-importance-of-sleep-and-recovery',
        icon: ArrowPathIcon,
    },
    {
        name: 'Brain games',
        description: "Lumosity",
        href: 'https://www.lumosity.com/en/',
        icon: Squares2X2Icon,
    },

]
const callsToAction = [
    {
        name: 'Pomodoro',
        href: 'https://www.youtube.com/watch?v=IUXNiDJJ_9s&ab_channel=TheTimer',
        icon: PlayIcon
    },
    {
        name: "Let's go focus",
        href: 'https://soundcloud.com/concentrationmusicforwork/sets/productive-day-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        icon: MusicalNoteIcon
    },
]
const completedTasks = [
    {
        name: 'Task 1',
        description: 'Descr 1',
        href: '#',
        icon: StarIcon,
    },
    {
        name: 'Task 2',
        description: 'Descr 2',
        href: '#',
        icon: StarIcon,
    },
    {
        name: 'Task 3',
        description: 'Descr 3',
        href: '#',
        icon: StarIcon,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Header() {
    const dispatch = useDispatch();
    const {isCreateMode} = useSelector(state => state.taskReducer);

    const formVisibilityHandler = () => {
        dispatch(createModeHandler(!isCreateMode))
        dispatch(tipsHandler())
    }
    return (
        <Popover className="relative bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div
                    className="flex items-center justify-between border-b-2 border-indigo-500 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <img
                                className="h-20 w-auto sm:h-50"
                                src={brainLogo}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                    </div>

                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                        <Popover className="relative">
                            {({open}) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-lime-300' : 'text-slate-300',
                                            'group inline-flex items-center bg-slate-900 font-medium hover:text-lime-300 focus:outline-none'
                                        )}
                                    >
                                        <span>More</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-lime-300' : 'text-slate-300',
                                                'ml-2 h-5 w-5 group-hover:text-lime-300'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel
                                            className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                            <div
                                                className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {solutions.map((item) => (
                                                        <a
                                                            target="_blank"
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                        >
                                                            <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                                                       aria-hidden="true"/>
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div
                                                    className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                    {callsToAction.map((item) => (
                                                        <div key={item.name} className="flow-root">
                                                            <a
                                                                target="_blank"
                                                                href={item.href}
                                                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                                            >
                                                                <item.icon
                                                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                                                    aria-hidden="true"/>
                                                                <span className="ml-3">{item.name}</span>
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <Popover className="relative">
                            {({open}) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-lime-300' : 'text-slate-300',
                                            'group inline-flex items-center bg-slate-900 font-medium hover:text-lime-300 focus:outline-none'
                                        )}
                                    >
                                        <span>Completed</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-lime-300' : 'text-slate-300',
                                                'ml-2 h-5 w-5 group-hover:text-lime-300'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel
                                            className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                            <div
                                                className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {completedTasks.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                        >
                                                            <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                                                       aria-hidden="true"/>
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                                                    <div className="mt-5 text-sm">
                                                        <a href="#"
                                                           className="font-medium text-indigo-600 hover:text-indigo-500">
                                                            View all completed tasks
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </Popover.Group>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <Popover.Button
                            onClick={formVisibilityHandler}
                            href="#"
                            className="ml- inline-flex items-center justify-center whitespace-nowrap rounded-md focus:outline-none bg-indigo-800 px-8 py-3 text-base font-bold text-lime-200 shadow-sm hover:bg-lime-300 hover:text-lime-800"
                        >
                            New task
                        </Popover.Button>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus
                               className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div
                        className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button
                                        className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                        >
                                            <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                                       aria-hidden="true"/>
                                            <span
                                                className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Pricing
                                </a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Docs
                                </a>
                                {completedTasks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
