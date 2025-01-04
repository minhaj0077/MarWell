import React from "react";
import ReactDOM from "react-dom/client";
import img from "./pushpa2.jpg"

const Header = () => {
    return (
        <div className="header">
            <div className="app-name" >MarWell</div>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Sports</li>
                <li>Login</li>
                <li>Sighin</li>
                </ul>
                
            </div>
        </div>
    );
};

const MovieCard = (props) => {
    const {movieData} = props;
    const {image,title, sub_title} = movieData?.search_horizontal_content_card?.data;
    return (
        <div className="card">
            <img className="poster" src={" https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/" + image.src} alt="movie poster"/>
            <h3>{title}</h3>
            <h5>{sub_title}</h5>
        </div>
    );
};

const moviesList = [
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRJ7YmsKCjEyNzEzMDUxODUSFERlYWRwb29sICYgV29sdmVyaW5lGhREZWFkcG9vbCAmIFdvbHZlcmluZSIFTU9WSUUqCVN1cGVyaGVybzDhp5reBEgBagN0ZWxqA2VuZ2oDaGluagN0YW1yA2VuZ2oKCAUSBm1hcnZlbHABGmQKIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBILbW9yZV9yZXN1bHQaIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/8730/1731416968730-h",
                    "alt": "Deadpool & Wolverine",
                    "dimension": {
                        "width": 1920,
                        "height": 1080
                    }
                },
                "title": "Deadpool & Wolverine",
                "sub_title": "2024  •  2h 7m  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1271305185",
                                "page_slug": "/in/movies/deadpool-and-wolverine/1271305185"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "Deadpool & Wolverine",
                                "page_url": "/in/movies/deadpool-and-wolverine/1271305185",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/8730/1731416968730-h",
                                    "alt": "Deadpool & Wolverine"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESeWJrCgoxMjcxMzA1MTg1EhREZWFkcG9vbCAmIFdvbHZlcmluZRoURGVhZHBvb2wgJiBXb2x2ZXJpbmUiBU1PVklFKglTdXBlcmhlcm8w4aea3gRIAWoDdGVsagNlbmdqA2hpbmoDdGFtcgNlbmdqCggBEgZtYXJ2ZWwaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/7497/1731416817497-i",
                        "alt": "Deadpool & Wolverine"
                    },
                    "content_info": {
                        "title": "Deadpool & Wolverine",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/1375/1731416791375-t",
                            "alt": "Deadpool & Wolverine",
                            "dimension": {
                                "width": 669,
                                "height": 285
                            }
                        },
                        "description": "His days as Deadpool behind him, Wade toils away. But a sudden threat has him reluctantly suiting up as he tries to convince Wolverine… oh hell, just watch.",
                        "tags": [
                            {
                                "value": "2024"
                            },
                            {
                                "value": "2h 7m"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "4 Languages"
                            },
                            {
                                "value": "A"
                            },
                            {
                                "value": "Superhero"
                            },
                            {
                                "value": "Action"
                            },
                            {
                                "value": "Adventure"
                            },
                            {
                                "value": "Science Fiction"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    },
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRKzAWKiAQoKMTI2MDA3MjY4MhIpU2hhbmctQ2hpIGFuZCBUaGUgTGVnZW5kIG9mIFRoZSBUZW4gUmluZ3MaKVNoYW5nLUNoaSBhbmQgVGhlIExlZ2VuZCBvZiBUaGUgVGVuIFJpbmdzIgVNT1ZJRSoMU3VwZXIgSGVyb2VzMOrd7NgESAFqA3RlbGoDZW5nagNoaW5qA3RhbWoDa2FuagNtYWxyA2VuZ2oKCAUSBm1hcnZlbHACGmQKIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBILbW9yZV9yZXN1bHQaIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/8720/1078720-h-125f68c67f48",
                    "alt": "Shang-Chi and The Legend of The Ten Rings",
                    "dimension": {}
                },
                "title": "Shang-Chi and The Legend of The Ten Rings",
                "sub_title": "2021  •  2h 12m  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1260072682",
                                "page_slug": "/in/movies/shang-chi-and-the-legend-of-the-ten-rings/1260072682"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "Shang-Chi and The Legend of The Ten Rings",
                                "page_url": "/in/movies/shang-chi-and-the-legend-of-the-ten-rings/1260072682",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/8720/1078720-h-125f68c67f48",
                                    "alt": "Shang-Chi and The Legend of The Ten Rings"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESsQFiogEKCjEyNjAwNzI2ODISKVNoYW5nLUNoaSBhbmQgVGhlIExlZ2VuZCBvZiBUaGUgVGVuIFJpbmdzGilTaGFuZy1DaGkgYW5kIFRoZSBMZWdlbmQgb2YgVGhlIFRlbiBSaW5ncyIFTU9WSUUqDFN1cGVyIEhlcm9lczDq3ezYBEgBagN0ZWxqA2VuZ2oDaGluagN0YW1qA2thbmoDbWFscgNlbmdqCggBEgZtYXJ2ZWwaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/9296/1369296-i-9c4de25be85b",
                        "alt": "Shang-Chi and The Legend of The Ten Rings"
                    },
                    "content_info": {
                        "title": "Shang-Chi and The Legend of The Ten Rings",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/9298/1369298-t-e0c9c01fca08",
                            "alt": "Shang-Chi and The Legend of The Ten Rings",
                            "dimension": {}
                        },
                        "description": "Shang-Chi, a martial arts master, must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
                        "tags": [
                            {
                                "value": "2021"
                            },
                            {
                                "value": "2h 12m"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "6 Languages"
                            },
                            {
                                "value": "U/A 13+"
                            },
                            {
                                "value": "Super Heroes"
                            },
                            {
                                "value": "Action"
                            },
                            {
                                "value": "Adventure"
                            },
                            {
                                "value": "Fantasy"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    },
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRKGAWJ2CgoxMjYwMTEwMDA4EhZUaG9yOiBMb3ZlIGFuZCBUaHVuZGVyGhZUaG9yOiBMb3ZlIGFuZCBUaHVuZGVyIgVNT1ZJRSoGQWN0aW9uMLiB79gESAFqA3RlbGoDZW5nagNoaW5qA3RhbWoDa2FuagNtYWxyA2VuZ2oKCAUSBm1hcnZlbHADGmQKIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBILbW9yZV9yZXN1bHQaIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/8295/1328295-h-b05c8156e59a",
                    "alt": "Thor: Love and Thunder",
                    "dimension": {}
                },
                "title": "Thor: Love and Thunder",
                "sub_title": "2022  •  1h 58m  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1260110008",
                                "page_slug": "/in/movies/thor-love-and-thunder/1260110008"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "Thor: Love and Thunder",
                                "page_url": "/in/movies/thor-love-and-thunder/1260110008",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/8295/1328295-h-b05c8156e59a",
                                    "alt": "Thor: Love and Thunder"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATEShAFidgoKMTI2MDExMDAwOBIWVGhvcjogTG92ZSBhbmQgVGh1bmRlchoWVGhvcjogTG92ZSBhbmQgVGh1bmRlciIFTU9WSUUqBkFjdGlvbjC4ge/YBEgBagN0ZWxqA2VuZ2oDaGluagN0YW1qA2thbmoDbWFscgNlbmdqCggBEgZtYXJ2ZWwaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/5285/1365285-i-fe1d56ee6b43",
                        "alt": "Thor: Love and Thunder"
                    },
                    "content_info": {
                        "title": "Thor: Love and Thunder",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/5287/1365287-t-9b7448a95309",
                            "alt": "Thor: Love and Thunder",
                            "dimension": {}
                        },
                        "description": "Thor teams up with King Valkyrie, Korg and ex-girlfriend-turned-Mighty-Thor Jane Foster to take on a galactic killer known as Gorr the God Butcher.",
                        "tags": [
                            {
                                "value": "2022"
                            },
                            {
                                "value": "1h 58m"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "6 Languages"
                            },
                            {
                                "value": "U/A 13+"
                            },
                            {
                                "value": "Action"
                            },
                            {
                                "value": "Science Fiction"
                            },
                            {
                                "value": "Comedy"
                            },
                            {
                                "value": "Adventure"
                            },
                            {
                                "value": "Fantasy"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    },
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRJlYlUKCjEyNjAwNjM0NTESBExva2kaBExva2kiBFNIT1cqBkFjdGlvbjDblezYBEIGTWFydmVsSAFqA3RlbGoDZW5nagNoaW5qA3RhbXIDZW5nWgQQAhgBagoIBRIGbWFydmVscAQaZAohU2VhcmNoSG9yaXpvbnRhbENvbnRlbnRDYXJkV2lkZ2V0Egttb3JlX3Jlc3VsdBohU2VhcmNoSG9yaXpvbnRhbENvbnRlbnRDYXJkV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/7029/1607029-h-a2ffa2811163",
                    "alt": "Loki",
                    "dimension": {}
                },
                "title": "Loki",
                "sub_title": "2023  •  2 Seasons  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1260063451",
                                "page_slug": "/in/shows/loki/1260063451"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "Loki",
                                "page_url": "/in/shows/loki/1260063451",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/7029/1607029-h-a2ffa2811163",
                                    "alt": "Loki"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESY2JVCgoxMjYwMDYzNDUxEgRMb2tpGgRMb2tpIgRTSE9XKgZBY3Rpb24w25Xs2ARCBk1hcnZlbEgBagN0ZWxqA2VuZ2oDaGluagN0YW1yA2VuZ1oEEAIYAWoKCAESBm1hcnZlbBpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/7033/1607033-i-d6f937c102ac",
                        "alt": "Loki"
                    },
                    "content_info": {
                        "title": "Loki",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/7032/1607032-t-73a2c8df16e9",
                            "alt": "Loki",
                            "dimension": {
                                "width": 687,
                                "height": 285
                            }
                        },
                        "description": "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”",
                        "tags": [
                            {
                                "value": "2023"
                            },
                            {
                                "value": "2 Seasons"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "4 Languages"
                            },
                            {
                                "value": "U/A 13+"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    },
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRKFAWJ1CgoxMjYwMDEzNTU2EhFBdmVuZ2VyczogRW5kZ2FtZRoRQXZlbmdlcnM6IEVuZGdhbWUiBU1PVklFKgxTdXBlciBIZXJvZXMw9I/p2ARIAWILRGFyayBIdW1vdXJqA3RlbGoDZW5nagNoaW5qA3RhbXIDZW5nagoIBRIGbWFydmVscAUaZAohU2VhcmNoSG9yaXpvbnRhbENvbnRlbnRDYXJkV2lkZ2V0Egttb3JlX3Jlc3VsdBohU2VhcmNoSG9yaXpvbnRhbENvbnRlbnRDYXJkV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/4469/674469-h",
                    "alt": "Avengers: Endgame",
                    "dimension": {}
                },
                "title": "Avengers: Endgame",
                "sub_title": "2019  •  3h 1m  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1260013556",
                                "page_slug": "/in/movies/avengers-endgame/1260013556"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "Avengers: Endgame",
                                "page_url": "/in/movies/avengers-endgame/1260013556",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/4469/674469-h",
                                    "alt": "Avengers: Endgame"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESgwFidQoKMTI2MDAxMzU1NhIRQXZlbmdlcnM6IEVuZGdhbWUaEUF2ZW5nZXJzOiBFbmRnYW1lIgVNT1ZJRSoMU3VwZXIgSGVyb2VzMPSP6dgESAFiC0RhcmsgSHVtb3VyagN0ZWxqA2VuZ2oDaGluagN0YW1yA2VuZ2oKCAESBm1hcnZlbBpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/6720/1366720-i-c30300a11e8d",
                        "alt": "Avengers: Endgame"
                    },
                    "content_info": {
                        "title": "Avengers: Endgame",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/6722/1366722-t-48964025ccfe",
                            "alt": "Avengers: Endgame",
                            "dimension": {}
                        },
                        "description": "After the devastating events of the Infinity War, the Avengers assemble once more to reverse Thanos’ actions and restore balance to the universe.",
                        "tags": [
                            {
                                "value": "2019"
                            },
                            {
                                "value": "3h 1m"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "4 Languages"
                            },
                            {
                                "value": "U/A 13+"
                            },
                            {
                                "value": "Super Heroes"
                            },
                            {
                                "value": "Action"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    },
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRKPAWJ/CgoxNjYwMDEwNjc3EhZBdmVuZ2VyczogSW5maW5pdHkgV2FyGhZBdmVuZ2VyczogSW5maW5pdHkgV2FyIgVNT1ZJRSoMU3VwZXIgSGVyb2VzMLWBx5cGSAFiC0RhcmsgSHVtb3VyagN0ZWxqA2VuZ2oDaGluagN0YW1yA2VuZ2oKCAUSBm1hcnZlbHAGGmQKIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBILbW9yZV9yZXN1bHQaIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/5184/675184-h",
                    "alt": "Avengers: Infinity War",
                    "dimension": {}
                },
                "title": "Avengers: Infinity War",
                "sub_title": "2018  •  2h 29m  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1660010677",
                                "page_slug": "/in/movies/avengers-infinity-war/1660010677"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "Avengers: Infinity War",
                                "page_url": "/in/movies/avengers-infinity-war/1660010677",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/5184/675184-h",
                                    "alt": "Avengers: Infinity War"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESjQFifwoKMTY2MDAxMDY3NxIWQXZlbmdlcnM6IEluZmluaXR5IFdhchoWQXZlbmdlcnM6IEluZmluaXR5IFdhciIFTU9WSUUqDFN1cGVyIEhlcm9lczC1gceXBkgBYgtEYXJrIEh1bW91cmoDdGVsagNlbmdqA2hpbmoDdGFtcgNlbmdqCggBEgZtYXJ2ZWwaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/4908/1374908-i-7da93f401ac7",
                        "alt": "Avengers: Infinity War"
                    },
                    "content_info": {
                        "title": "Avengers: Infinity War",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/4910/1374910-t-c524f5224090",
                            "alt": "Avengers: Infinity War",
                            "dimension": {}
                        },
                        "description": "With the powerful Thanos on the verge of raining destruction upon the universe, the Avengers will have to risk everything to stop him.",
                        "tags": [
                            {
                                "value": "2018"
                            },
                            {
                                "value": "2h 29m"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "4 Languages"
                            },
                            {
                                "value": "U/A 13+"
                            },
                            {
                                "value": "Super Heroes"
                            },
                            {
                                "value": "Action"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    },
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRKNAWJ9CgoxNjYwMDAwMDE1EhVNYXJ2ZWwncyBUaGUgQXZlbmdlcnMaFU1hcnZlbCdzIFRoZSBBdmVuZ2VycyIFTU9WSUUqDFN1cGVyIEhlcm9lczCPrsaXBkgBYgtEYXJrIEh1bW91cmoDdGVsagNlbmdqA2hpbmoDdGFtcgNlbmdqCggFEgZtYXJ2ZWxwBxpkCiFTZWFyY2hIb3Jpem9udGFsQ29udGVudENhcmRXaWRnZXQSC21vcmVfcmVzdWx0GiFTZWFyY2hIb3Jpem9udGFsQ29udGVudENhcmRXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/4409/674409-h",
                    "alt": "Marvel's The Avengers",
                    "dimension": {}
                },
                "title": "Marvel's The Avengers",
                "sub_title": "2012  •  2h 22m  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1660000015",
                                "page_slug": "/in/movies/marvels-the-avengers/1660000015"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "Marvel's The Avengers",
                                "page_url": "/in/movies/marvels-the-avengers/1660000015",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/4409/674409-h",
                                    "alt": "Marvel's The Avengers"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESiwFifQoKMTY2MDAwMDAxNRIVTWFydmVsJ3MgVGhlIEF2ZW5nZXJzGhVNYXJ2ZWwncyBUaGUgQXZlbmdlcnMiBU1PVklFKgxTdXBlciBIZXJvZXMwj67GlwZIAWILRGFyayBIdW1vdXJqA3RlbGoDZW5nagNoaW5qA3RhbXIDZW5nagoIARIGbWFydmVsGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/983/1120983-i-633ec2bcc241",
                        "alt": "Marvel's The Avengers"
                    },
                    "content_info": {
                        "title": "Marvel's The Avengers",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/982/1120982-t-8843da3137d1",
                            "alt": "Marvel's The Avengers",
                            "dimension": {
                                "width": 928,
                                "height": 285
                            }
                        },
                        "description": "Nick Fury finds himself in need of a team to pull the world back from the brink of disaster by launching the Avengers initiative.",
                        "tags": [
                            {
                                "value": "2012"
                            },
                            {
                                "value": "2h 22m"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "4 Languages"
                            },
                            {
                                "value": "U/A 13+"
                            },
                            {
                                "value": "Super Heroes"
                            },
                            {
                                "value": "Action"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    },
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRJwYmAKCjEyNjAwNzc5NDkSCEV0ZXJuYWxzGghFdGVybmFscyIFTU9WSUUqDFN1cGVyIEhlcm9lczD9hu3YBEgBagN0ZWxqA2VuZ2oDaGluagN0YW1qA2thbmoDbWFscgNlbmdqCggFEgZtYXJ2ZWxwCBpkCiFTZWFyY2hIb3Jpem9udGFsQ29udGVudENhcmRXaWRnZXQSC21vcmVfcmVzdWx0GiFTZWFyY2hIb3Jpem9udGFsQ29udGVudENhcmRXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/87/1100087-h-70e9725e4a9b",
                    "alt": "Eternals",
                    "dimension": {}
                },
                "title": "Eternals",
                "sub_title": "2021  •  2h 35m  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1260077949",
                                "page_slug": "/in/movies/eternals/1260077949"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "Eternals",
                                "page_url": "/in/movies/eternals/1260077949",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/87/1100087-h-70e9725e4a9b",
                                    "alt": "Eternals"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESbmJgCgoxMjYwMDc3OTQ5EghFdGVybmFscxoIRXRlcm5hbHMiBU1PVklFKgxTdXBlciBIZXJvZXMw/Ybt2ARIAWoDdGVsagNlbmdqA2hpbmoDdGFtagNrYW5qA21hbHIDZW5nagoIARIGbWFydmVsGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/9502/1369502-i-a7ee8619a12a",
                        "alt": "Eternals"
                    },
                    "content_info": {
                        "title": "Eternals",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/9504/1369504-t-da369ee3a5d9",
                            "alt": "Eternals",
                            "dimension": {}
                        },
                        "description": "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history, and civilizations",
                        "tags": [
                            {
                                "value": "2021"
                            },
                            {
                                "value": "2h 35m"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "6 Languages"
                            },
                            {
                                "value": "U/A 13+"
                            },
                            {
                                "value": "Super Heroes"
                            },
                            {
                                "value": "Action"
                            },
                            {
                                "value": "Adventure"
                            },
                            {
                                "value": "Fantasy"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    },
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRKkAWKTAQoKMTI2MDAxODMxNRIgTWFydmVsJ3MgQXZlbmdlcnM6IEFnZSBPZiBVbHRyb24aIE1hcnZlbCdzIEF2ZW5nZXJzOiBBZ2UgT2YgVWx0cm9uIgVNT1ZJRSoMU3VwZXIgSGVyb2VzMIu16dgESAFiC0RhcmsgSHVtb3VyagN0ZWxqA2VuZ2oDaGluagN0YW1yA2VuZ2oKCAUSBm1hcnZlbHAJGmQKIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBILbW9yZV9yZXN1bHQaIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/4675/674675-h",
                    "alt": "Marvel's Avengers: Age Of Ultron",
                    "dimension": {}
                },
                "title": "Marvel's Avengers: Age Of Ultron",
                "sub_title": "2015  •  2h 21m  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1260018315",
                                "page_slug": "/in/movies/marvels-avengers-age-of-ultron/1260018315"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "Marvel's Avengers: Age Of Ultron",
                                "page_url": "/in/movies/marvels-avengers-age-of-ultron/1260018315",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/4675/674675-h",
                                    "alt": "Marvel's Avengers: Age Of Ultron"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESogFikwEKCjEyNjAwMTgzMTUSIE1hcnZlbCdzIEF2ZW5nZXJzOiBBZ2UgT2YgVWx0cm9uGiBNYXJ2ZWwncyBBdmVuZ2VyczogQWdlIE9mIFVsdHJvbiIFTU9WSUUqDFN1cGVyIEhlcm9lczCLtenYBEgBYgtEYXJrIEh1bW91cmoDdGVsagNlbmdqA2hpbmoDdGFtcgNlbmdqCggBEgZtYXJ2ZWwaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/2743/1372743-i-43a76dcaf1fd",
                        "alt": "Marvel's Avengers: Age Of Ultron"
                    },
                    "content_info": {
                        "title": "Marvel's Avengers: Age Of Ultron",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/2746/1372746-t-9e3930b7f230",
                            "alt": "Marvel's Avengers: Age Of Ultron",
                            "dimension": {
                                "width": 766,
                                "height": 285
                            }
                        },
                        "description": "Tony Stark builds an AI system named Ultron, and when things go wrong, it's up to Earth's mightiest heroes to stop the villain from enacting his terrible plan.",
                        "tags": [
                            {
                                "value": "2015"
                            },
                            {
                                "value": "2h 21m"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "4 Languages"
                            },
                            {
                                "value": "U/A 13+"
                            },
                            {
                                "value": "Super Heroes"
                            },
                            {
                                "value": "Action"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    },
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRJsYlwKCjEyNjAxNjc4NjASC1RoZSBNYXJ2ZWxzGgtUaGUgTWFydmVscyIFTU9WSUUqDFN1cGVyIEhlcm9lczC0xfLYBEgBagN0ZWxqA2VuZ2oDaGluagN0YW1yA2VuZ2oKCAUSBm1hcnZlbHAKGmQKIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBILbW9yZV9yZXN1bHQaIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/7002/1657002-h-c91c8c15ff6d",
                    "alt": "The Marvels",
                    "dimension": {}
                },
                "title": "The Marvels",
                "sub_title": "2023  •  1h 44m  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1260167860",
                                "page_slug": "/in/movies/the-marvels/1260167860"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "The Marvels",
                                "page_url": "/in/movies/the-marvels/1260167860",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/7002/1657002-h-c91c8c15ff6d",
                                    "alt": "The Marvels"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESamJcCgoxMjYwMTY3ODYwEgtUaGUgTWFydmVscxoLVGhlIE1hcnZlbHMiBU1PVklFKgxTdXBlciBIZXJvZXMwtMXy2ARIAWoDdGVsagNlbmdqA2hpbmoDdGFtcgNlbmdqCggBEgZtYXJ2ZWwaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/7013/1657013-i-0433f19bb907",
                        "alt": "The Marvels"
                    },
                    "content_info": {
                        "title": "The Marvels",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/7012/1657012-t-5c27a14dc743",
                            "alt": "The Marvels",
                            "dimension": {
                                "width": 843,
                                "height": 285
                            }
                        },
                        "description": "Captain Marvel joins forces with her estranged niece, astronaut Captain Monica Rambeau and super-fan Kamala Khan, aka Ms. Marvel to save the universe.",
                        "tags": [
                            {
                                "value": "2023"
                            },
                            {
                                "value": "1h 44m"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "4 Languages"
                            },
                            {
                                "value": "U/A 13+"
                            },
                            {
                                "value": "Super Heroes"
                            },
                            {
                                "value": "Action"
                            },
                            {
                                "value": "Adventure"
                            },
                            {
                                "value": "Science Fiction"
                            },
                            {
                                "value": "Fantasy"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    },
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRKfAWKOAQoKMTI2MDExODgyMRIeQmxhY2sgUGFudGhlcjogV2FrYW5kYSBGb3JldmVyGh5CbGFjayBQYW50aGVyOiBXYWthbmRhIEZvcmV2ZXIiBU1PVklFKgZBY3Rpb24wpcbv2ARIAWILRGFyayBIdW1vdXJqA3RlbGoDZW5nagNoaW5qA3RhbWoDbWFscgNlbmdqCggFEgZtYXJ2ZWxwCxpkCiFTZWFyY2hIb3Jpem9udGFsQ29udGVudENhcmRXaWRnZXQSC21vcmVfcmVzdWx0GiFTZWFyY2hIb3Jpem9udGFsQ29udGVudENhcmRXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/5112/1455112-h-d61280c52c02",
                    "alt": "Black Panther: Wakanda Forever",
                    "dimension": {}
                },
                "title": "Black Panther: Wakanda Forever",
                "sub_title": "2022  •  2h 41m  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1260118821",
                                "page_slug": "/in/movies/black-panther-wakanda-forever/1260118821"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "Black Panther: Wakanda Forever",
                                "page_url": "/in/movies/black-panther-wakanda-forever/1260118821",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/5112/1455112-h-d61280c52c02",
                                    "alt": "Black Panther: Wakanda Forever"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESnQFijgEKCjEyNjAxMTg4MjESHkJsYWNrIFBhbnRoZXI6IFdha2FuZGEgRm9yZXZlchoeQmxhY2sgUGFudGhlcjogV2FrYW5kYSBGb3JldmVyIgVNT1ZJRSoGQWN0aW9uMKXG79gESAFiC0RhcmsgSHVtb3VyagN0ZWxqA2VuZ2oDaGluagN0YW1qA21hbHIDZW5nagoIARIGbWFydmVsGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/3981/1463981-i-76197ed0f4b9",
                        "alt": "Black Panther: Wakanda Forever"
                    },
                    "content_info": {
                        "title": "Black Panther: Wakanda Forever",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/5108/1455108-t-c884ad383174",
                            "alt": "Black Panther: Wakanda Forever",
                            "dimension": {
                                "width": 499,
                                "height": 285
                            }
                        },
                        "description": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers after the death of beloved King T’Challa.",
                        "tags": [
                            {
                                "value": "2022"
                            },
                            {
                                "value": "2h 41m"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "5 Languages"
                            },
                            {
                                "value": "U/A 13+"
                            },
                            {
                                "value": "Action"
                            },
                            {
                                "value": "Super Heroes"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    },
    {
        "search_horizontal_content_card": {
            "widget_commons": {
                "version": "1",
                "instrumentation": {
                    "override_referrer": true,
                    "impression_events": [
                        {
                            "event_name": "Content Viewed"
                        }
                    ],
                    "instrumentation_context_v2": {
                        "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                        "value": "CkcSIVNlYXJjaEhvcml6b250YWxDb250ZW50Q2FyZFdpZGdldBofU2VhcmNoR3JpZEhvcml6b250YWwvR3JpZFdpZGdldCIBMRKoAWKXAQoKMTY2MDAwMDAzNBIiQ2FwdGFpbiBBbWVyaWNhOiBUaGUgRmlyc3QgQXZlbmdlchoiQ2FwdGFpbiBBbWVyaWNhOiBUaGUgRmlyc3QgQXZlbmdlciIFTU9WSUUqDFN1cGVyIEhlcm9lczCirsaXBkgBYgtEYXJrIEh1bW91cmoDdGVsagNlbmdqA2hpbmoDdGFtcgNlbmdqCggFEgZtYXJ2ZWxwDBpkCiFTZWFyY2hIb3Jpem9udGFsQ29udGVudENhcmRXaWRnZXQSC21vcmVfcmVzdWx0GiFTZWFyY2hIb3Jpem9udGFsQ29udGVudENhcmRXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                    }
                },
                "name": "SearchHorizontalContentCardWidget"
            },
            "data": {
                "image": {
                    "src": "sources/r1/cms/prod/4581/674581-h",
                    "alt": "Captain America: The First Avenger",
                    "dimension": {}
                },
                "title": "Captain America: The First Avenger",
                "sub_title": "2011  •  2h 4m  •  Marvel",
                "actions": {
                    "on_click": [
                        {
                            "hs_track": {
                                "name": "Content Clicked"
                            }
                        },
                        {
                            "page_navigation": {
                                "page_type": "DesktopDetailsPage",
                                "page_url": "/v2/pages/detail?content_id=1660000034",
                                "page_slug": "/in/movies/captain-america-the-first-avenger/1660000034"
                            }
                        },
                        {
                            "add_to_search_history": {
                                "history_record_name": "Captain America: The First Avenger",
                                "page_url": "/in/movies/captain-america-the-first-avenger/1660000034",
                                "is_content": true,
                                "image": {
                                    "src": "sources/r1/cms/prod/4581/674581-h",
                                    "alt": "Captain America: The First Avenger"
                                },
                                "page_type": "DesktopDetailsPage",
                                "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESpgFilwEKCjE2NjAwMDAwMzQSIkNhcHRhaW4gQW1lcmljYTogVGhlIEZpcnN0IEF2ZW5nZXIaIkNhcHRhaW4gQW1lcmljYTogVGhlIEZpcnN0IEF2ZW5nZXIiBU1PVklFKgxTdXBlciBIZXJvZXMwoq7GlwZIAWILRGFyayBIdW1vdXJqA3RlbGoDZW5nagNoaW5qA3RhbXIDZW5nagoIARIGbWFydmVsGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                            }
                        }
                    ]
                },
                "expanded_content_poster": {
                    "image": {
                        "src": "sources/r1/cms/prod/9247/809247-i",
                        "alt": "Captain America: The First Avenger"
                    },
                    "content_info": {
                        "title": "Captain America: The First Avenger",
                        "title_cutout": {
                            "src": "sources/r1/cms/prod/8064/1368064-t-8c2ddf7c1366",
                            "alt": "Captain America: The First Avenger",
                            "dimension": {}
                        },
                        "description": "After being injected with a special \"Super-Soldier\" serum which leads to him developing superpowers Steve must thwart the plans of a warmonger.",
                        "tags": [
                            {
                                "value": "2011"
                            },
                            {
                                "value": "2h 4m"
                            },
                            {
                                "value": "Marvel"
                            },
                            {
                                "value": "4 Languages"
                            },
                            {
                                "value": "U/A 13+"
                            },
                            {
                                "value": "Super Heroes"
                            },
                            {
                                "value": "Action"
                            }
                        ]
                    }
                },
                "badge": {},
                "play": {
                    "icon": "icon-play-fill"
                }
            }
        }
    }
]


const Body = () => {
    return (
        <div className="body">
            <div className="search-section">
                <div className="search">search and button</div>
                <div className="years">Year Filter</div>
                <div className="jonars">Jonars list</div>
                <div className="language">Language</div>

            </div>
            <div className="card-container">
                 {moviesList.map((movies,index) => (<MovieCard key={index} movieData = {movies}/> )) }

            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div></div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);